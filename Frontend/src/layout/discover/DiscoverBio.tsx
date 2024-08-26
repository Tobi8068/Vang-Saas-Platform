import ImgExpand from 'assets/svg/expand.svg';

function DiscoverBio() {
    return (
        <div className='flex flex-col gap-4 items-center justify-center w-full'>
            <h1 className='text-[#757575] font-bold text-[32px]'>Hmm… so many CRMs, so little time. Let’s find the one that loves your leads as much as you do.</h1>
            <img src={ImgExpand} className='w-5 h-5'></img>
        </div>
    )
}

export default DiscoverBio;