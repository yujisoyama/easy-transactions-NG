import { Triangle } from 'react-loader-spinner'

export const DashboardLoading = () => {
    return (
        <div className='flex h-full justify-center items-center'>
            <Triangle
                height="80"
                width="80"
                color="#2cb67d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </div>
    )
}