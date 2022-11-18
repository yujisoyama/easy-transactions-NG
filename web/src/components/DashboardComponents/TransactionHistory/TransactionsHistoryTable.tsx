import { TransactionHistoryRow } from "./TransactionHistoryRow"
import { ITransactions } from "./TransactionsHistoryTab";
import "../../../styles/scrollbar.css"

interface ITransactionHistoryTableProps {
    transactions: ITransactions[];
}

export const TransactionsHistoryTable = (props: ITransactionHistoryTableProps) => {
    return (
        <>
            <div className="w-full mt-6 text-main border-b border-main grid grid-cols-4 text-start mobile:text-[10px]">
                <p>Origin</p>
                <p>Destiny</p>
                <p>Value</p>
                <p>Date</p>
            </div>

            {props.transactions.length ? (
                <div className="w-full max-h-[380px] overflow-y-auto text-paragraph">
                    {props.transactions.map(transaction => [
                        <TransactionHistoryRow key={transaction.id} origin={transaction.debited_user} destiny={transaction.credited_user} value={transaction.value} date={transaction.created_at} />
                    ])}
                </div>
            ) : (
                <div className="mx-auto my-7 text-main font-open text-center mobile:text-[10px]">
                    You don't have transactions with this filter.
                </div>
            )}
        </>
    )
}
