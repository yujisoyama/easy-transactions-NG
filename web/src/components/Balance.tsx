import { useUser } from "../context/UserContext";

export const Balance = () => {
    const { user } = useUser();

    return (
        <div className="bg-background rounded-lg w-[300px] h-[110px] p-4 text-main font-extrabold mx-auto mt-10 mobile:self-center">
            <p className="border-b border-paragraph mb-4">Balance</p>
            <p className="float-left">$</p>
            <p className="float-right text-2xl text-highlightGreen">{user.account.balance.toFixed(2)}</p>
        </div>
    )
}
