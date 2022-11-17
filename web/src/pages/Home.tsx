import { FormEvent, useState } from "react"
import { Footer } from "../components/Footer"
import { HomeHeader } from "../components/HomeHeader"
import { LoginForm } from "../components/LoginForm"

export const Home = () => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    let timer: number;

    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        setErrorMessage("");
        const formData = new FormData(event.target as HTMLFormElement);
        const form = Object.fromEntries(formData);
        // timer = setTimeout(async () => await , 1000);
    }


    return (
        <div className="bg-loginBackground bg-cover bg-no-repeat w-screen h-screen overflow-y-auto flex flex-col justify-between mobile:bg-loginBackgroundMobile">
            <HomeHeader />
            <LoginForm />
            <Footer />
        </div>
    )
}
