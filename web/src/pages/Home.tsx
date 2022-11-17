import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../Api"
import { Footer } from "../components/Footer"
import { HomeHeader } from "../components/HomeHeader"
import { LoginForm } from "../components/LoginForm"
import { useUser } from "../context/UserContext"

export const Home = () => {
    const { setToken, setAuthenticated } = useUser();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();
    let timer: number;

    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");
        const formData = new FormData(event.target as HTMLFormElement);
        const form = Object.fromEntries(formData);
        timer = setTimeout(async () => await login(form), 1000);
    }

    const login = async (form: { [k: string]: FormDataEntryValue; }): Promise<void | string> => {
        setAuthenticated(undefined);
        await api.post('/user/login', {
            username: form.username,
            password: form.password
        }).then(res => {
            localStorage.setItem("ngtoken", res.data.token)
            setToken(res.data);
            navigate("/dashboard");
        }).catch(error => {
            setErrorMessage(error.response.data.message);
        }).finally(() => {
            setLoading(false);
            clearTimeout(timer);
        })
    }

    return (
        <div className="bg-loginBackground bg-cover bg-no-repeat w-screen h-screen overflow-y-auto flex flex-col justify-between mobile:bg-loginBackgroundMobile">
            <HomeHeader />
            <LoginForm loading={loading} errorMessage={errorMessage} handleLogin={handleLogin} />
            <Footer />
        </div>
    )
}
