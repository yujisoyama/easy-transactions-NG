import { Balance } from "../components/Balance";
import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardTabs } from "../components/DashboardTabs";
import { Footer } from "../components/Footer";
import { useUser } from "../context/UserContext";


export const Dashboard = () => {
    const { user } = useUser();

    return (
        <div className="bg-backgroundLight w-screen h-screen overflow-y-auto">
            <DashboardHeader username={user.username} />
            <Balance />
            <DashboardTabs />
            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
