import { Account } from "../entities/Account";
import { Transaction } from "../entities/Transaction";
export interface ITransactionService {
    makeTrasaction(cashOutUsername: string, cashInUsername: string, transactionValue: number): Promise<any>;
    haveTransaction(accountId: Partial<Account>): Promise<Transaction[]>;
    getTransactions(accountId: Account, date?: Date, transactionType?: string): Promise<object[]>;
}