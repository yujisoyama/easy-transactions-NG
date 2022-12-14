interface ITransferSuccessProps {
    message: string;
}

export const TransferSuccess = (props: ITransferSuccessProps) => {
    return (
        <div className="w-5/6 mx-auto mb-5 border-2 border-highlightGreen rounded-md text-center text-sm text-highlightGreen p-1">
            {props.message}
        </div>
    )
}