import { Account } from "../entities/Account";
import { Transaction } from "../entities/Transaction";

export interface ITransactionHistory {
    id: number;
    value: number;
    createdAt: Date;
    debitedAccountId: {
        id: number;
        balance?: number;
    },
    creditedAccountId: {
        id: number;
        balance?: number;
    },
}

export interface ITransactionService {
    makeTrasaction(cashOutUsername: string, cashInUsername: string, transactionValue: number): Promise<any>;
    haveTransaction(accountId: Partial<Account>): Promise<Transaction[]>;
    getTransactions(accountId: Account, date?: Date, transactionType?: string): Promise<ITransactionHistory[]>;
}