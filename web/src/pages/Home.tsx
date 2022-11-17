import { Footer } from "../components/Footer"
import { HomeHeader } from "../components/HomeHeader"
import { LoginForm } from "../components/LoginForm"

export const Home = () => {
    return (
        <div className="bg-loginBackground bg-cover bg-no-repeat w-screen h-screen overflow-y-auto flex flex-col justify-between mobile:bg-loginBackgroundMobile">
            <HomeHeader />
            <LoginForm />
            <Footer />
        </div>
    )
}
