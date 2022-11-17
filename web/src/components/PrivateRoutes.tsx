import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Footer } from "./Footer";
import { HomeHeader } from "./HomeHeader";
import { DashboardLoading } from "./DashboardLoading";

export const PrivateRoutes = () => {
    const { token, authenticated, getAccount } = useUser();
    let timer: number;

    useEffect(() => {
        timer = setTimeout(() => getAccount(token), 2000);
    }, [authenticated])

    if (authenticated === undefined) {
        return (
            <div className="bg-backgroundLight bg-cover bg-no-repeat w-screen h-screen overflow-y-auto flex flex-col justify-between mobile:bg-loginBackgroundMobile">
                <HomeHeader />
                <DashboardLoading />
                <Footer />
            </div>
        )
    }

    return authenticated ? <Outlet /> : <Navigate to="/" />
}
