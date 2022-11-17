import { At, CurrencyCircleDollar } from "phosphor-react"
import { FormEvent, useState } from "react";
import { api } from "../Api";
import { useUser } from "../context/UserContext";
import { FormInputError } from "./FormInputError";
import { Input } from "./Input"
import { TransactionInfo } from "./TransactionInfo";
import { TransactionSuccess } from "./TransactionSuccess";

export const TransferTab = () => {
    const { user, token, setUser } = useUser();
    const [cashInUser, setCashInUser] = useState<string>("");
    const [transactionValue, setTransactionValue] = useState<number>(0);
    const [transactionError, setTransactionError] = useState<string>("");
    const [transactionSuccess, setTransactionSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    let timer: number;

    const setCashIn = (event: FormEvent<HTMLInputElement>) => {
        setCashInUser(event.currentTarget.value);
    }

    const setTransaction = (event: FormEvent<HTMLInputElement>) => {
        const moneyValue: number = Number(event.currentTarget.value);
        setTransactionValue(Number(moneyValue.toFixed(2)));
    }

    const handleTransfer = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setTransactionError("");
        setTransactionSuccess("");
        timer = setTimeout(async () => await makeTransaction(), 1000)
    }

    const makeTransaction = async () => {
        await api.post('/transaction', {
            cashOutUser: user.username,
            cashInUser,
            value: transactionValue
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setTransactionSuccess(res.data.message);
            setUser({ ...user, account: res.data.newBalance })
        }).catch(error => {
            setTransactionError(error.response.data.message);
        }).finally(() => {
            setLoading(false);
            clearTimeout(timer);
        })
    }

    return (
        <div className="flex flex-row justify-around gap-6 my-10 items-start h-[200px] dashboardMobile:flex-col dashboardMobile:h-[500px] dashboardMobile:items-center dashboardMobile:my-3 dashboardMobile:gap-0">
            <div className="flex flex-col gap-4 w-64 dashboardMobile:h-[240px] dashboardMobile:justify-start">
                <div className="relative">
                    <label className="text-paragraph text-sm" htmlFor="destinyUsername">Who would you like to transfer to?</label>
                    <At className="inline absolute top-8 left-2" size={30} color='#2cb67d' weight="bold" />
                    <Input name="destinyUsername" id="destinyUsername" type="text" placeholder="username" onChange={setCashIn} />
                </div>
                <div className="relative">
                    <label className="text-paragraph text-sm" htmlFor="destinyUsername">How much would you like to transfer?</label>
                    <CurrencyCircleDollar className="inline absolute top-8 left-2" size={30} color='#2cb67d' weight="bold" />
                    <Input name="destinyUsername" id="destinyUsername" type="number" placeholder="000.00" onChange={setTransaction} />
                </div>
                {transactionError && <FormInputError message={transactionError} />}
                {transactionSuccess && <TransactionSuccess message={transactionSuccess} />}
            </div>
            <TransactionInfo cashOutUser={user.username} cashInUser={cashInUser} transferValue={transactionValue} loading={loading} handleTransfer={handleTransfer} />
        </div>
    )
}
