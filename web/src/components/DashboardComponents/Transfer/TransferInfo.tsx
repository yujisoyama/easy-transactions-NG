import { FormEvent } from "react";
import { ConfirmButton } from "../../ConfirmButton";

interface ITransferInfoProps {
    cashOutUser: string;
    cashInUser: string;
    transferValue: number;
    loading: boolean;
    handleTransfer: (event: FormEvent) => void;
}

export const TransferInfo = (props: ITransferInfoProps) => {
    return (
        <div className="flex flex-col gap-2 text-main w-72">
            <p className="border-b border-paragraph text-lg mb-3">Transaction Info:</p>
            <div>
                <p className="float-left">Cash-out:</p>
                <p className="float-right text-highlightGreen">{props.cashOutUser}</p>
            </div>
            <div>
                <p className="float-left">Cash-in:</p>
                <p className="float-right text-highlightGreen">{props.cashInUser}</p>
            </div>
            <div>
                <p className="float-left">Transfer value:</p>
                <p className="float-right text-highlightGreen">$ {props.transferValue.toFixed(2)}</p>
            </div>
            <div className="mt-8 w-40 self-center">
                <ConfirmButton handleClick={props.handleTransfer} label="Transfer" loading={props.loading} />
            </div>
        </div>
    )
}
