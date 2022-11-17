import { Account } from "../entities/Account";
import { transactionRepository } from "../repositories/TransactionRepository";

export const getTransactionByAccount = async (account: Account) => {
    return await transactionRepository.find({
        where: [
            { creditedAccountId: account },
            { debitedAccountId: account }
        ]
    });
}

export const getTransactionByAccountDateCashInAndOut = async (accountId: number, date: Date) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
        .andWhere("(transaction.debitedAccountId = :accountId OR transaction.creditedAccountId = :accountId)", { accountId })
        .leftJoinAndSelect("transaction.debitedAccountId", "debitedAccount")
        .leftJoinAndSelect("transaction.creditedAccountId", "creditedAccount")
        .getMany();
}

export const getTransactionByAccountDateCashOut = async (accountId: number, date: Date) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
        .andWhere("transaction.debitedAccountId = :accountId", { accountId })
        .leftJoinAndSelect("transaction.debitedAccountId", "debitedAccount")
        .leftJoinAndSelect("transaction.creditedAccountId", "creditedAccount")
        .getMany();
}

export const getTransactionByAccountDateCashIn = async (accountId: number, date: Date) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
        .andWhere("transaction.creditedAccountId = :accountId", { accountId })
        .leftJoinAndSelect("transaction.debitedAccountId", "debitedAccount")
        .leftJoinAndSelect("transaction.creditedAccountId", "creditedAccount")
        .getMany();
}

export const getTransactionByAccountCashOut = async (account: Account) => {
    return await transactionRepository.find({
        where: {
            debitedAccountId: account,
        },
    })
}

export const getTransactionByAccountCashIn = async (account: Account) => {
    return await transactionRepository.find({
        where: {
            creditedAccountId: account,
        },
    })
}
