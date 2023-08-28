'use client'
import Image from "next/image"
import patient from '../assets/patient.png'
import patient1 from '../assets/patient-1.png'
import quote from '../assets/Quote_1_.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css'
import { Autoplay, Navigation, } from 'swiper/modules';
const Testimonials = () => {
    return (
        <div className=' px-3 md:px-20 my-32'>
            <div className="w-[75%] mx-auto text-center mb-10">
                <h1 className="text-3xl my-3">What Our Patients Says</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="flex gap-5">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={2}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                      }}
                    modules={[Autoplay, Navigation,]}
                >
                    <SwiperSlide>
                        <div className='cursor-pointer w-full border px-8 py-12 rounded-xl'>
                            <div className="flex justify-between w-full gap-5 items-center">
                                <div>
                                    <Image src={patient} alt="patient"></Image>
                                </div>
                                <div className="grow">
                                    <h1 className='text-lg font-bold'>Farhana Hossain</h1>
                                    <p>Brand Designer</p>
                                </div>
                                <div>
                                    <Image src={quote} alt="quote" className=""></Image>
                                </div>
                            </div>
                            <div className="my-5">
                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cursor-pointer w-full border px-8 py-12 rounded-xl'>
                            <div className="flex justify-between w-full gap-5 items-center">
                                <div>
                                    <Image src={patient1} alt="patient"></Image>
                                </div>
                                <div className="grow">
                                    <h1 className='text-lg font-bold'>Farhana Hossain</h1>
                                    <p>Brand Designer</p>
                                </div>
                                <div>
                                    <Image src={quote} alt="quote" className=""></Image>
                                </div>
                            </div>
                            <div className="my-5">
                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cursor-pointer w-full border px-8 py-12 rounded-xl'>
                            <div className="flex justify-between w-full gap-5 items-center">
                                <div>
                                    <Image src={patient1} alt="patient"></Image>
                                </div>
                                <div className="grow">
                                    <h1 className='text-lg font-bold'>Farhana Hossain</h1>
                                    <p>Brand Designer</p>
                                </div>
                                <div>
                                    <Image src={quote} alt="quote" className=""></Image>
                                </div>
                            </div>
                            <div className="my-5">
                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cursor-pointer w-full border px-8 py-12 rounded-xl'>
                            <div className="flex justify-between w-full gap-5 items-center">
                                <div>
                                    <Image src={patient1} alt="patient"></Image>
                                </div>
                                <div className="grow">
                                    <h1 className='text-lg font-bold'>Farhana Hossain</h1>
                                    <p>Brand Designer</p>
                                </div>
                                <div>
                                    <Image src={quote} alt="quote" className=""></Image>
                                </div>
                            </div>
                            <div className="my-5">
                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>
        </div>
    )
}

export default Testimonials