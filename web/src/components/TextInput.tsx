import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    warning?: boolean;
}

export function TextInput(props: TextInputProps) {
    const required = props.warning;
    return (
        <input {...props} className={`w-full border-2 border-background outline-none bg-main py-2 px-6 pl-12 rounded-lg focus:border-highlightGreen ${required ? 'bg-alertBackground placeholder-background' : ''} `} />
    )
}