import { NotePencil, UserSquare, Lock } from "phosphor-react"
import { Link } from "react-router-dom"
import { ConfirmButton } from "./ConfirmButton"
import { TextInput } from "./TextInput"

interface ISignUpProps {
}

export const SignUpForm = (props: ISignUpProps) => {
    return (
        <div className="w-[400px] p-8 mx-auto my-12 opacity-95 rounded-[15px] bg-background font-open relative mobile:w-[300px] mobile:my-10 mobile:p-4">
            <NotePencil className="mx-auto" size={40} color="#2cb67d" weight="bold" />
            <h1 className="text-highlightGreen text-center font-extrabold text-2xl mt-3 mb-7">Sign Up</h1>
            <div>
                <form className="flex flex-col gap-6 relative">
                    <div className="relative w-5/6 mx-auto">
                        <UserSquare className="inline absolute top-[0.45rem] left-2" size={30} color='#1e7b54' weight="bold" />
                        <TextInput name="username" id="username" type='text' placeholder="username" warning={false} />
                    </div>
                    <div className="relative w-5/6 mx-auto">
                        <Lock className="inline absolute top-[0.5rem] left-2" size={30} color='#1e7b54' weight="bold" />
                        <TextInput name="password" id="password" type='password' placeholder="password" warning={false} />
                    </div>
                    <div className="w-3/4 mx-auto mt-3">
                        <ConfirmButton loading={false} label='Sign Up' />
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
