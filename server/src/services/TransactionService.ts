import { ITransactionService } from "../@types/ITransactionService";
import { Account } from "../entities/Account";
import { Transaction } from "../entities/Transaction";
import { transactionRepository } from "../repositories/TransactionRepository";
import { userRepository } from "../repositories/UserRepository";
import { databaseQueryTransaction } from "../utils/databaseQueryTransaction";


class TransactionService implements ITransactionService {
    async makeTrasaction(cashOutUsername: string, cashInUsername: string, transactionValue: number): Promise<any> {
        const cashOutUser = await userRepository.createQueryBuilder("user")
            .where("LOWER(user.username) = LOWER(:username)", { username: cashOutUsername })
            .select(["user.id", "user.username"])
            .leftJoinAndSelect("user.account", "account")
            .getOne();

        if (!cashOutUser) {
            return "The cash-out username does not exist."
        }

        const cashInUser = await userRepository.createQueryBuilder("user")
            .where("LOWER(user.username) = LOWER(:username)", { username: cashInUsername })
            .select(["user.id", "user.username"])
            .leftJoinAndSelect("user.account", "account")
            .getOne();

        if (!cashInUser) {
            return "The cash-in username does not exist."
        }

        if (cashOutUser.id === cashInUser.id) {
            return "You cannot make a transaction to yourself."
        }

        if (0 >= transactionValue) {
            return "You cannot make a transaction with this value."
        }

        if (cashOutUser.account.balance < transactionValue) {
            return "You do not have enough balance to make this transaction."
        }

        const updatedCashOutAccount = new Account();
        updatedCashOutAccount.id = cashOutUser.account.id;
        updatedCashOutAccount.balance = cashOutUser.account.balance - transactionValue;

        const updatedCashInAccount = new Account();
        updatedCashInAccount.id = cashInUser.account.id;
        updatedCashInAccount.balance = cashInUser.account.balance + transactionValue;

        const newTransaction = new Transaction();
        newTransaction.debitedAccountId = cashOutUser.account;
        newTransaction.creditedAccountId = cashInUser.account;
        newTransaction.value = transactionValue;

        const result = await databaseQueryTransaction(updatedCashOutAccount, updatedCashInAccount, newTransaction);

        if (typeof result === "string") {
            return result;
        }

        return updatedCashOutAccount;
    }

    async getTransactions(account: Account, date?: Date | undefined, transactionType?: string | undefined): Promise<any> {
        if (typeof date !== undefined && typeof transactionType !== undefined) {
            switch (transactionType) {
                case 'both':
                    const bothTransactions = await transactionRepository.createQueryBuilder("transaction")
                        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
                        .andWhere("(transaction.debitedAccountId = :account OR transaction.creditedAccountId = :account)", { account })
                        .getMany();
                    return bothTransactions;
                case 'cash-out':
                    const cashOutTransactions = await transactionRepository.createQueryBuilder("transaction")
                        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
                        .andWhere("transaction.debitedAccountId = :account", { account })
                        .getMany();
                    return cashOutTransactions;
                case 'cash-in':
                    const cashInTransactions = await transactionRepository.createQueryBuilder("transaction")
                        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
                        .andWhere("transaction.creditedAccountId = :account", { account })
                        .getMany();
                    return cashInTransactions;
            }
        }
    }
}
const transactionService = new TransactionService();
export default transactionService;