interface ITransactionHistoryRowProps {
    origin: string;
    destiny: string;
    value: number;
    date: string;
}


export const TransactionHistoryRow = (props: ITransactionHistoryRowProps) => {
    const date: string = props.date.split('T')[0];
    return (
        <div className="w-full h-12 border-b border-backgroundLight grid grid-cols-4 text-start items-center text-sm mobile:text-[8px]">
            <p>{props.origin}</p>
            <p>{props.destiny}</p>
            <p>$ {props.value.toFixed(2)}</p>
            <p>{date}</p>
        </div>
    )
}
