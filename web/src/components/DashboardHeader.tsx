import { User } from "phosphor-react";

interface IDashboardHeaderProps {
    username: string;
}

export const DashboardHeader = (props: IDashboardHeaderProps) => {
    return (
        <div className="bg-background font-open flex flex-row items-center justify-between p-5">
            <div className='flex flex-row gap-3 items-center'>
                <User size={32} color="#fffffe" weight="bold" />
                <p className='text-main font-bold'>{props.username}</p>
            </div>
            <p className="text-lg text-paragraph mobile:text-base">Log out</p>
        </div>
    )
}
