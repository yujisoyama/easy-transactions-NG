import { InputHTMLAttributes } from 'react'

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    warning?: boolean;
}

export function Input(props: ITextInputProps) {
    const { warning, ...rest } = props;
    return (
        <input {...rest} className={`w-full border-2 border-background outline-none bg-main py-2 px-6 pl-12 rounded-lg focus:border-highlightGreen ${warning ? 'bg-alertBackground placeholder-background' : ''} `} />
    )
}