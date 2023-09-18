import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import footerLogo from '../assets/logo.png'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import './Footer.css'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row p-5 md:p-20 bg-blue-500 gap-8 text-white'>
        <div>
            <Image src={footerLogo} alt='logo' className='w-[200px] bg-gray-400 p-2'></Image>
            <ul className='my-5'>
                <li>12 King Street, Melbourne 3000, AU</li>
                <li>contact@appolohealth.com</li>
                <li>+61 3 8376 6284</li>
            </ul>
            <ul className='flex gap-5 cursor-pointer'>
                <li><BsTwitter className='hover:text-sky-500'></BsTwitter></li>
                <li><FaFacebookF className='hover:text-sky-500'></FaFacebookF></li>
                <li><FaLinkedinIn className='hover:text-sky-500'></FaLinkedinIn></li>
                <li><BsInstagram className='hover:text-sky-500'></BsInstagram></li>
            </ul>
        </div>
        <div>
            <h1 className='text-2xl font-bold mb-5'>POPULAR POSTS</h1>
            <h4 className=''>VALUES TO RETINAL IMPRESSIONS OF MOVEMENT</h4>
            <p>By <span className='text-sky-300'> John Doe</span> on 15 Jan, 2018</p>
            <h4 className='mt-3'>CHILD SHOWS INCONSCIOUS</h4>
            <h4>MOVEMENT ON SINGNING</h4>
            <p>By <span className='text-sky-300'> Admin</span> on 15 Jan, 2018</p>
        </div>
        <div>
            <h1 className='text-2xl font-bold mb-5'>USEFUL LINKS</h1>
            <ul className='footer-links'>
                <li className='flex gap-2 items-center'><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>About us</li>
                <li className='flex gap-2 items-center'><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>Customer Service</li>
                <li className='flex gap-2 items-center'><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>Top Constructors</li>
                <li className='flex gap-2 items-center'><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>Our Agents</li>
                <li className='flex gap-2 items-center'><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>Privacy Policy</li>
                <li className='flex gap-2 items-center'><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>Terms & condition</li>
            </ul>
        </div>
        <div>
            <h1 className='text-2xl font-bold mb-5'>WE ARE OPEN</h1>
            <p>Monday - Friday : 10:30AM to 07:00 PM</p>
            <p>Saturday - Sunday : 12:30AM to 05:00 PM</p>
            <h1 className='my-3'>SUBSCRIBE NEWSLETTER</h1>
            <input type='text' className='p-3' placeholder='your email address'></input>
        </div>
    </div>
  )
}

export default Footer