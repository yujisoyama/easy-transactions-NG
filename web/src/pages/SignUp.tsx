import { FormEvent, useState } from "react"
import { Form } from "react-router-dom"
import { api } from "../Api"
import { Footer } from "../components/Footer"
import { HomeHeader } from "../components/HomeHeader"
import { SignUpConfirmation } from "../components/SignUpConfirmation"
import { SignUpForm } from "../components/SignUpForm"

export const SignUp = () => {
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [userCreated, setUserCreated] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    let timer: number;

    const handleSignUp = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setUsernameError(false);
        setPasswordError(false);
        setErrorMessage('');
        const formData = new FormData(event.target as HTMLFormElement);
        const form = Object.fromEntries(formData);
        timer = setTimeout(async () => await createUser(form), 1000);
    }

    const createUser = async (form: { [k: string]: FormDataEntryValue }) => {
        await api.post('/user', {
            username: form.username,
            password: form.password
        }).then(res => {
            console.log(res.data);
            setUsername(form.username.toString());
            setUserCreated(true);
        }).catch(error => {
            setErrorMessage(error.response.data.message);
            if (error.response.data.fieldError === "username") {
                setUsernameError(true);
            }
            if (error.response.data.fieldError === "password") {
                setPasswordError(true);
            }
        }).finally(() => {
            setLoading(false);
        })
        clearTimeout(timer);
    }

    return (
        <div className="bg-loginBackground bg-cover bg-no-repeat w-screen h-screen overflow-y-auto flex flex-col justify-between  mobile:bg-loginBackgroundMobile">
            <HomeHeader />
            {userCreated ? (
                <SignUpConfirmation username={username} />
            ) : (
                <SignUpForm loading={loading} usernameError={usernameError} passwordError={passwordError} errorMessage={errorMessage} handleSignUp={handleSignUp} />
            )}
            <Footer />
        </div>
    )
}
