import { useEffect, useState } from "react"
import { TransactionHistoryRow } from "./TransactionHistoryRow"
import "./TransactionHistoryTable.css"
import { ITransactions } from "./TransactionsHistoryTab";

interface ITransactionHistoryTableProps {
    transactions: ITransactions[];
}

export const TransctionsHistoryTable = (props: ITransactionHistoryTableProps) => {
    return (
        <>
            <div className="w-full mt-6 text-main border-b border-main grid grid-cols-4 text-start">
                <p>Origin</p>
                <p>Destiny</p>
                <p>Value</p>
                <p>Date</p>
            </div>
            <div className="w-full max-h-[380px] overflow-y-auto text-paragraph">
                {props.transactions.map(transaction => [
                    <TransactionHistoryRow key={transaction.id} origin={transaction.debited_user} destiny={transaction.credited_user} value={transaction.value} date={transaction.created_at} />
                ])}
            </div>
        </>
    )
}
