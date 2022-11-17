import { Account } from "../entities/Account";
import { User } from "../entities/User";
import { transactionRepository } from "../repositories/TransactionRepository";

export const getTransactionByAccount = async (accountId: number) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .innerJoin(User, "debitedUser", "debitedUser.accountId = transaction.debitedAccountId")
        .innerJoin(User, "creditedUser", "creditedUser.accountId = transaction.creditedAccountId")
        .andWhere("(transaction.debitedAccountId = :accountId OR transaction.creditedAccountId = :accountId)", { accountId })
        .select(["transaction.id AS id", "transaction.value AS value", "transaction.createdAt AS created_at", "debitedUser.username AS debited_User", "creditedUser.username AS credited_User"])
        .orderBy("transaction.id")
        .execute();
}

export const getTransactionByAccountDateCashInAndOut = async (accountId: number, date: Date) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .innerJoin(User, "debitedUser", "debitedUser.accountId = transaction.debitedAccountId")
        .innerJoin(User, "creditedUser", "creditedUser.accountId = transaction.creditedAccountId")
        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
        .andWhere("(transaction.debitedAccountId = :accountId OR transaction.creditedAccountId = :accountId)", { accountId })
        .select(["transaction.id AS id", "transaction.value AS value", "transaction.createdAt AS created_at", "debitedUser.username AS debited_User", "creditedUser.username AS credited_User"])
        .orderBy("transaction.id")
        .execute();
}

export const getTransactionByAccountDateCashOut = async (accountId: number, date: Date) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .innerJoin(User, "debitedUser", "debitedUser.accountId = transaction.debitedAccountId")
        .innerJoin(User, "creditedUser", "creditedUser.accountId = transaction.creditedAccountId")
        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
        .andWhere("transaction.debitedAccountId = :accountId", { accountId })
        .select(["transaction.id AS id", "transaction.value AS value", "transaction.createdAt AS created_at", "debitedUser.username AS debited_User", "creditedUser.username AS credited_User"])
        .orderBy("transaction.id")
        .execute();
}

export const getTransactionByAccountDateCashIn = async (accountId: number, date: Date) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .innerJoin(User, "debitedUser", "debitedUser.accountId = transaction.debitedAccountId")
        .innerJoin(User, "creditedUser", "creditedUser.accountId = transaction.creditedAccountId")
        .where(`DATE_TRUNC('day', "createdAt") = :date`, { date })
        .andWhere("transaction.creditedAccountId = :accountId", { accountId })
        .select(["transaction.id AS id", "transaction.value AS value", "transaction.createdAt AS created_at", "debitedUser.username AS debited_User", "creditedUser.username AS credited_User"])
        .orderBy("transaction.id")
        .execute();
}

export const getTransactionByAccountCashOut = async (accountId: number) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .innerJoin(User, "debitedUser", "debitedUser.accountId = transaction.debitedAccountId")
        .innerJoin(User, "creditedUser", "creditedUser.accountId = transaction.creditedAccountId")
        .andWhere("transaction.debitedAccountId = :accountId", { accountId })
        .select(["transaction.id AS id", "transaction.value AS value", "transaction.createdAt AS created_at", "debitedUser.username AS debited_User", "creditedUser.username AS credited_User"])
        .orderBy("transaction.id")
        .execute();
}

export const getTransactionByAccountCashIn = async (accountId: number) => {
    return await transactionRepository.createQueryBuilder("transaction")
        .innerJoin(User, "debitedUser", "debitedUser.accountId = transaction.debitedAccountId")
        .innerJoin(User, "creditedUser", "creditedUser.accountId = transaction.creditedAccountId")
        .andWhere("transaction.creditedAccountId = :accountId", { accountId })
        .select(["transaction.id AS id", "transaction.value AS value", "transaction.createdAt AS created_at", "debitedUser.username AS debited_User", "creditedUser.username AS credited_User"])
        .orderBy("transaction.id")
        .execute();
}
