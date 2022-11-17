import { InputHTMLAttributes } from "react";
import { ThreeDots } from "react-loader-spinner";

interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    loading: boolean;
}

export const ConfirmButton = (props: IButtonProps) => {
    return (
        <button disabled={props.loading} className={`w-full h-10 rounded-full font-extrabold text-stroke ${props.loading ? 'bg-buttonDisabled' : 'bg-highlightBlue hover:bg-buttonHover duration-200'}`} type="submit">
            {props.loading
                ? <ThreeDots
                    height="20"
                    width="40"
                    radius="2"
                    color="#010101"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ justifyContent: "center" }}
                    visible={true}
                />
                : `${props.label}`
            }
        </button>
    )
}
