import ImgExpand from 'assets/svg/expand.svg';

function DiscoverBio() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='text-[#757575] font-bold text-[28px]'>Hmm… so many CRMs, so little time. Let’s find the one that loves your leads as much as you do.</h1>
            <div className='flex items-center h-[48px]'>
                <img src={ImgExpand} className='w-5 h-5 hover:cursor-pointer hover:mt-[-5px]'></img>
            </div>
        </div>
    )
}

export default DiscoverBio;