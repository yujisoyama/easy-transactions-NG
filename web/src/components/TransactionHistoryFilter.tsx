import { FormEvent } from "react";
import { ConfirmButton } from "./ConfirmButton"

interface IHistoryFilterProps {
    loading: boolean;
    selectDate: (event: FormEvent<HTMLInputElement>) => void;
    selectType: (event: FormEvent<HTMLSelectElement>) => void;
    handleFilter: () => void;
}

export const TransactionHistoryFilter = (props: IHistoryFilterProps) => {
    return (
        <div className="w-full my-4 text-background">
            <div className="flex flex-row justify-between gap-5 items-center">
                <div className="flex flex-row gap-4 historyResponsive:flex-col mobile:text-[12px]">
                    <input onChange={props.selectDate} className="w-[140px] text-center border-2 border-background outline-none bg-main rounded-md focus:border-highlightGreen mobile:w-[100px]" type="date" name="date" id="date" />
                    <select onChange={props.selectType} defaultValue={'tipo'} className="w-[100px] pl-1 border-2 border-background outline-none bg-main rounded-md focus:border-highlightGreen">
                        <option disabled value="tipo">Tipo</option>
                        <option value="cash-in">cash-in</option>
                        <option value="cash-out">cash-out</option>
                        <option value="both">ambos</option>
                    </select>
                </div>
                <div className="w-[120px] pr-2">
                    <ConfirmButton handleClick={props.handleFilter} label="Filter" loading={props.loading} />
                </div>
            </div>
        </div>
    )
}
