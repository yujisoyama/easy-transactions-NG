import { Oval } from 'react-loader-spinner'

export const TransactionHistoryLoading = () => {
    return (
        <div className='h-full py-4 flex justify-center items-center'>
            <Oval
                height={40}
                width={40}
                color="#2cb67d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#242629"
                strokeWidth={8}
                strokeWidthSecondary={8}
            />
        </div>
    )
}