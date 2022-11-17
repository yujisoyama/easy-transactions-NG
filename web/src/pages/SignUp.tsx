import { Footer } from "../components/Footer"
import { HomeHeader } from "../components/HomeHeader"
import { SignUpConfirmation } from "../components/SignUpConfirmation"
import { SignUpForm } from "../components/SignUpForm"

export const SignUp = () => {

    return (
        <div className="bg-loginBackground bg-cover bg-no-repeat w-screen h-screen overflow-y-auto flex flex-col justify-between  mobile:bg-loginBackgroundMobile">
            <HomeHeader />
            {false ? (
                <SignUpConfirmation username={'test'} />
            ) : (
                <SignUpForm />
            )}
            <Footer />
        </div>
    )
}
