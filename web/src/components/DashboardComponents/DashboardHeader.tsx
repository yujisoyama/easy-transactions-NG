import { SignOut, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

interface IDashboardHeaderProps {
    username: string;
}

export const DashboardHeader = (props: IDashboardHeaderProps) => {
    const {setToken} = useUser();
    const navigate = useNavigate();

    const logOut = () => {
        setToken("");
        localStorage.setItem("token", "");
        navigate("/");
    }

    return (
        <div className="bg-background font-open flex flex-row items-center justify-between h-[72px]">
            <div className='flex flex-row gap-3 items-center pl-5'>
                <User size={32} color="#fffffe" weight="bold" />
                <p className='text-main font-bold'>{props.username}</p>
            </div>
            <div onClick={logOut} className="flex items-center gap-2 h-full px-5 hover:bg-secondary hover:cursor-pointer duration-300">
                <p className="text-lg text-main mobile:text-base">Log out</p>
                <SignOut size={32} color="#fffffe" weight="bold" />
            </div>
        </div>
    )
}
