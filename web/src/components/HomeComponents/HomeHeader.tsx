import img from '../../../assets/NG-logo.png'

export const HomeHeader = () => {
    return (
        <div className="bg-background font-open flex flex-row items-center justify-between px-5 h-[72px]">
            <img src={img} alt="NG" className='w-16 mobile:w-10' />
            <p className="text-lg text-paragraph mobile:text-base">Making transactions easy</p>
        </div>
    )
}
