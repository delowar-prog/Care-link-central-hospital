import Image from 'next/image'
import BannerImg from '@/assets/common-banner.png'
const CommonBanner = ({pageTitle}) => {
    return (
        <div className='relative'>
            <Image src={BannerImg} alt='image' className='w-full'></Image>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='flex items-center text-start p-3 md:py-14 flex-col text-white'>
                    <h3 className='text-md'>Home / {pageTitle}</h3>
                    <h1 className='text-3xl font-bold'>{pageTitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default CommonBanner