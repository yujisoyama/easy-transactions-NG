import { NotePencil, UserSquare, Lock } from "phosphor-react"
import { FormEvent } from "react"
import { Link } from "react-router-dom"
import { ConfirmButton } from "./ConfirmButton"
import { FormInputError } from "./FormInputError"
import { Input } from "./Input"

interface ISignUpProps {
    usernameError: boolean;
    passwordError: boolean;
    loading: boolean;
    errorMessage: string;
    handleSignUp: (event: FormEvent) => void
}

export const SignUpForm = (props: ISignUpProps) => {
    return (
        <div className="w-[400px] p-8 mx-auto my-12 opacity-95 rounded-[15px] bg-background font-open relative mobile:w-[300px] mobile:my-10 mobile:p-4">
            <NotePencil className="mx-auto" size={40} color="#2cb67d" weight="bold" />
            <h1 className="text-highlightGreen text-center font-extrabold text-2xl mt-3 mb-7">Sign Up</h1>
            {props.errorMessage &&
                <FormInputError message={props.errorMessage} />
            }
            <div>
                <form onSubmit={props.handleSignUp} className="flex flex-col gap-6 relative">
                    <div className="relative w-5/6 mx-auto">
                        <UserSquare className="inline absolute top-[0.45rem] left-2" size={30} color='#1e7b54' weight="bold" />
                        <Input name="username" id="username" type='text' placeholder="username" warning={props.usernameError} />
                    </div>
                    <div className="relative w-5/6 mx-auto">
                        <Lock className="inline absolute top-[0.5rem] left-2" size={30} color='#1e7b54' weight="bold" />
                        <Input name="password" id="password" type='password' placeholder="password" warning={props.passwordError} />
                    </div>
                    <div className="w-3/4 mx-auto mt-3">
                        <ConfirmButton loading={props.loading} label='Sign Up' type="submit" />
                    </div>
                    <div className="text-xs text-secondary font-semibold w-full text-center flex justify-center gap-3 mobile:gap-2">
                        <p className="inline">Already have an account?</p>
                        <p><Link to="/" className="text-main hover:underline">Log in!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
