import { CheckSquare } from "phosphor-react"
import { Link } from "react-router-dom";

interface ISignUpConfirmProps {
    username: string;
}

export const SignUpConfirmation = (props: ISignUpConfirmProps) => {
    return (
        <div className="w-[400px] p-8 mx-auto my-28 opacity-95 rounded-[15px] bg-background font-open relative mobile:w-[300px] mobile:my-10 mobile:p-6 text-paragraph">
            <CheckSquare className="mx-auto" size={40} color="#2cb67d" weight="bold" />
            <h1 className="text-highlightGreen text-center font-extrabold text-2xl mt-3 mb-4">Account created!</h1>
            <p className="mb-4">Hi {props.username}, </p>
            <p>Feel free to use the platform.</p>
            <p className="mb-4">Hope you enjoy!</p>
            <p className="text-right"><Link to="/" className="text-main text-sm hover:underline">Return to Log in page</Link></p>
        </div>
    )
}
