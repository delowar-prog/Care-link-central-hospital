'use client'
import CommonBanner from '@/components/CommonBanner'
import Image from 'next/image'
import profileImg from '@/assets/doc5.png'
import { useState } from 'react'
import MakeAppointment from './MakeAppointment'
const DoctorsProfile = () => {
    const [show, setShow] = useState(1)
    return (
        <div className=''>
            <CommonBanner pageTitle={'Doctor Profile'}></CommonBanner>
            <div className='bg-sky-100 w-full px-5 md:px-20 pt-5 flex flex-col md:flex-row gap-3 md:gap-20 justify-around items-center'>
                <div className='space-y-2'>
                    <h3 className='text-2xl text-[#068EE9] font-bold'>Ophtalmology Specialist</h3>
                    <h1 className='text-5xl font-bold'>Dr. Nilufar Chudhowry</h1>
                    <p className='text-lg'>We combine expertise, technology, safety, and patient care.</p>
                    <div className='w-full flex justify-start py-5'>
                        <button className='border-2 p-2 border-[#068EE9] rounded hover:bg-[#068EE9] text-[#068EE9] hover:text-white uppercase text-lg'>Get an Appointment</button>
                    </div>
                </div>
                <div>
                    <Image src={profileImg} className='w-[450px]'></Image>
                </div>
            </div>
            <div className='profile-details static'>
                <div className='static bg-white w-[90%] mx-auto rounded-x-xl flex flex-col md:flex-row gap-10 justify-between'>
                    <div className='p-5 w-full md:w-[65%]'>
                        <h1 className='text-2xl my-5'>CV & Biography</h1>
                        <div className='teb-container'>
                            <ul className='flex gap-2 md:gap-5'>
                                <li><button className={`border border-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded ${show === 1 ? 'bg-blue-500 text-white' : ''}`} onClick={() => setShow(1)}>Education</button></li>
                                <li><button className={`border border-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded ${show === 2 ? 'bg-blue-500 text-white' : ''}`} onClick={() => setShow(2)}>Experience</button></li>
                                <li><button className={`border border-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded ${show === 3 ? 'bg-blue-500 text-white' : ''}`} onClick={() => setShow(3)}>Award</button></li>
                            </ul>
                        </div>
                        <div className='tab-content'>
                            <div className={`${show === 1 ? 'block' : 'hidden'}`}>
                                <div className='mt-8'>
                                    <h1 className="text-xl my-2">About Me</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br></br>
                                    <h1 className="text-xl my-2">Eduction</h1>
                                    <ul className='list-disc ml-5'>
                                        <li><span className='font-bold'>American Dental Medical University</span> <br></br>
                                            BDS <br></br>
                                            1998 - 2003
                                        </li>
                                        <li><span className='font-bold'>American Dental Medical University</span> <br></br>
                                            MDS <br></br>
                                            2003 - 2005
                                        </li>
                                        <li><span className='font-bold'>American Dental Medical University</span> <br></br>
                                            MDS <br></br>
                                            2003 - 2005
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${show === 2 ? 'block' : 'hidden'}`}>
                                <div className='mt-8'>
                                    <h1 className="text-xl my-2">Work & Experience</h1>
                                    <ul className='list-disc ml-5'>
                                        <li><span className='font-bold'>Glowing Smiles Family Dental Clinic</span> <br></br>
                                            2010 - Present (5 years)
                                        </li>
                                        <li><span className='font-bold'>Comfort Care Dental Clinic</span> <br></br>
                                            2007 - 2010 (3 years)
                                        </li>
                                        <li><span className='font-bold'>Dream Smile Dental Practice</span> <br></br>
                                            2005 - 2007 (2 years)
                                        </li>
                                    </ul>
                                    <h1 className="text-xl my-2">Services</h1>
                                    <ul className='list-disc ml-5'>
                                        <li>Tooth cleaning</li>
                                        <li>Root Canal Therapy</li>
                                        <li>Implants</li>
                                        <li>Composite Bonding</li>
                                        <li>Fissure Sealants</li>
                                        <li>Surgical Extractions</li>
                                    </ul>
                                    <h1 className="text-xl my-2">Specializations</h1>
                                    <ul className='list-disc ml-5'>
                                        <li>Children Care</li>
                                        <li>Dental Care</li>
                                        <li>Oral and Maxillofacial Surgery</li>
                                        <li>Orthodontist</li>
                                        <li>Periodontist</li>
                                        <li>Prosthodontics</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${show === 3 ? 'block' : 'hidden'}`}>
                                <div className='mt-8'>
                                    <h1 className="text-xl my-2">Awards</h1>
                                    <div>
                                        <div className='mt-3'>
                                            <p>July 2019</p>
                                            <h3 className='text-lg font-bold'>Humanitarian Award</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <p>March 2011</p>
                                            <h3 className='text-lg font-bold'>Certificate for International Volunteer Service</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <p>May 2008</p>
                                            <h3 className='text-lg font-bold'>The Dental Professional of The Year Award</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[35%] flex flex-col gap-10'>
                        <div className='p-5 mt-14 bg-sky-500 text-white'>
                            <div>
                                <h1 className='text-2xl mb-5'>Working Time</h1>
                            </div>
                            <div className='flex justify-between pb-2 mb-3 border-b border-white'>
                                <p>Monday-Thursday</p>
                                <p>-</p>
                                <p>04:00pm-09:00pm</p>
                            </div>
                            <div className='flex justify-between pb-2 mb-3 border-b border-white'>
                                <p>Friday</p>
                                <p>-</p>
                                <p>09:00am-12:00pm</p>
                            </div>
                            <div className='flex justify-between pb-2 mb-3 border-b border-white'>
                                <p>Saturday</p>
                                <p>-</p>
                                <p>06:00pm-09:00pm</p>
                            </div>
                            <div className='flex justify-between pb-2 mb-3 border-b border-white'>
                                <p>Sunday</p>
                                <p>-</p>
                                <p>05:00pm-09:00pm</p>
                            </div>
                        </div>
                        <MakeAppointment/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsProfile

//https://preview.themeforest.net/item/medixi-doctor-medical-care-wordpress-theme/full_screen_preview/47795763?_ga=2.225596893.697934102.1693574766-361041974.1680939770

//https://medik.wpengine.com/about/