interface IFormInputErrorProps {
    message: string;
}

export const FormInputError = (props: IFormInputErrorProps) => {
    return (
        <div className="w-5/6 mx-auto mb-5 border-2 border-alert rounded-md text-center text-sm text-alert p-1">
            {props.message}
        </div>
    )
}
