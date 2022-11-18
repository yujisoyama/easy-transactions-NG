import { FormEvent, useEffect, useState } from "react"
import { api } from "../../../Api";
import { useUser } from "../../../context/UserContext";
import { TransactionHistoryFilter } from "./TransactionHistoryFilter";
import { TransactionHistoryLoading } from "./TransactionHistoryLoading";
import { TransactionsHistoryTable } from "./TransactionsHistoryTable";
interface IFilter {
    account: {
        id: number;
    },
    date: string;
    transactionType: string;
}

export interface ITransactions {
    id: number;
    debited_user: string;
    credited_user: string;
    value: number;
    created_at: string;
}

export const TransactionsHistoryTab = () => {
    const { user, token } = useUser();
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<IFilter>({ account: { id: user.account.id }, date: "", transactionType: "" });
    const [haveTransactions, setHaveTransactions] = useState<boolean | undefined>(undefined);
    const [transactions, setTransactions] = useState<ITransactions[]>([]);
    let timer: number;

    useEffect(() => {
        timer = setTimeout(() => getHaveTransactions(), 1500);
    }, []);

    const selectDate = (event: FormEvent<HTMLInputElement>) => {
        setFilter({ ...filter, date: event.currentTarget.value });
    }

    const selectType = (event: FormEvent<HTMLSelectElement>) => {
        setFilter({ ...filter, transactionType: event.currentTarget.value });
    }

    const getHaveTransactions = async () => {
        await api.get(`/transaction/${user.account.id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(async res => {
            if (res.data.haveTransaction) {
                await getTransactions();
                setHaveTransactions(res.data.haveTransaction);
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setHaveTransactions(false);
        });
    }

    const getTransactions = async () => {
        await api.post('/transaction/history', filter, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setTransactions(res.data);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            clearTimeout(timer);
            setLoading(false);
        });
    }

    const handleFilter = async () => {
        setLoading(true);
        timer = setTimeout(() => getTransactions(), 1500);
    }

    const renderTransactionsHistory = () => {
        if (haveTransactions === undefined) {
            return <TransactionHistoryLoading />
        }
        if (haveTransactions === false) {
            return (
                <div className="mx-auto my-7 text-main font-open text-center">
                    You haven't participated in any transactions yet.
                </div>
            )
        }
        return (
            <>
                <TransactionHistoryFilter loading={loading} selectDate={selectDate} selectType={selectType} handleFilter={handleFilter} />
                <TransactionsHistoryTable  transactions={transactions} />
            </>
        )
    }

    return (
        <div className="w-full text-main font-open px-8">
            {renderTransactionsHistory()}
        </div>
    )
}
