'use client'
import React from 'react'
import Image from 'next/image'
import bannerImg from '../assets/banner.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const Banner = () => {
  
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-sky-600 dark:bg-gray-900 px-3 md:px-20 py-10'>
            <div className='w-[100%] md:w-[40%]'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className='text-white space-y-3'>
                            <h1 className='text-4xl font-bold'>Your Best Medical Help Center</h1>
                            <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <button className='btn hover:btn-success'>Get Appoinment</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-white space-y-3'>
                            <h1 className='text-4xl font-bold'>Your Best Medical Help Center</h1>
                            <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <button className='btn hover:btn-success'>Get Appoinment</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='text-white space-y-3'>
                            <h1 className='text-4xl font-bold'>Your Best Medical Help Center</h1>
                            <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <button className='btn hover:btn-success'>Get Appoinment</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-white space-y-3'>
                            <h1 className='text-4xl font-bold'>Your Best Medical Help Center</h1>
                            <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <button className='btn hover:btn-success'>Get Appoinment</button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='md:w-[60%]'>
                <Image src={bannerImg} alt='bannerImage'></Image>
            </div>
        </div>
    )
}

export default Banner