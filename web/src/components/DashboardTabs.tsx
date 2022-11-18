import * as Tabs from '@radix-ui/react-tabs';
import { useEffect, useState } from 'react';
import { TransactionsHistoryTab } from './TransactionsHistoryTab';
import { TransferTab } from './TransferTab';


export const DashboardTabs = () => {
    const [tabOpen, setTabOpen] = useState<boolean[]>([true, false]);

    const openTab = (tab: number) => {
        const newTabOpen: boolean[] = [false, false];
        newTabOpen[tab] = true;
        setTabOpen(newTabOpen);
    }

    return (
        <div className='bg-background w-5/6 max-w-[800px] mb-10 rounded-lg mobile:mx-auto'>
            <Tabs.Root className="flex flex-col py-4" defaultValue="transfer">
                <Tabs.List className="flex text-xl font-semibold">
                    <Tabs.Trigger onClick={() => openTab(0)} className={`px-4 ml-4 border-b-2 ${tabOpen[0] ? 'text-highlightGreen border-highlightGreen' : 'text-paragraph border-background hover:cursor-pointer hover:text-main duration-150'} mobile:text-base`} value="transfer">
                        Transfer
                    </Tabs.Trigger>
                    <Tabs.Trigger onClick={() => openTab(1)} className={`px-4 border-b-2 ${tabOpen[1] ? 'text-highlightGreen border-highlightGreen' : 'text-paragraph border-background hover:cursor-pointer hover:text-main duration-150'} mobile:text-base`} value="history">
                        Transactions History
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="transfer">
                    <TransferTab />
                </Tabs.Content>
                <Tabs.Content value="history">
                    <TransactionsHistoryTab />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}