import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { TransactionsHistoryTab } from './TransactionHistory/TransactionsHistoryTab';
import { TransferTab } from './Transfer/TransferTab';


export const DashboardTabs = () => {
    const [tabOpen, setTabOpen] = useState<boolean>(true);

    return (
        <div className='bg-background w-5/6 max-w-[800px] mb-10 rounded-lg mobile:mx-auto'>
            <Tabs.Root className="flex flex-col py-4" defaultValue="transfer" onValueChange={() => setTabOpen(previousTab => !previousTab)}>
                <Tabs.List className="flex text-xl font-semibold">
                    <Tabs.Trigger className={`px-4 ml-4 border-b-2 ${tabOpen ? 'text-highlightGreen border-highlightGreen' : 'text-paragraph border-background hover:cursor-pointer hover:text-main duration-150'} mobile:text-base`} value="transfer">
                        Transfer
                    </Tabs.Trigger>
                    <Tabs.Trigger className={`px-4 border-b-2 ${!tabOpen ? 'text-highlightGreen border-highlightGreen' : 'text-paragraph border-background hover:cursor-pointer hover:text-main duration-150'} mobile:text-base`} value="history">
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