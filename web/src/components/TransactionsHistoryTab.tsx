import { useEffect } from "react"
import { HistoryFilter } from "./HistoryFilter";

export const TransactionsHistoryTab = () => {

    useEffect(() => {

    });

    return (
        <div className="w-full text-main font-open px-8">
            {true ? (
                <HistoryFilter />
            ) : (
                <div className="mx-auto my-7 text-main font-open text-center">
                    You haven't participated in any transactions yet.
                </div>
            )}
        </div>
    )
}
