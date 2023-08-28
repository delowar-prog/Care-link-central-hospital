import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import Image from 'next/image'
import appoinment from '../assets/appoinment.png'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 px-8 md:mx-20 my-48 bg-sky-600 text-white'>
            <div className='space-y-3 w-[40%] relative'>
                <Image src={appoinment} alt='image' className='hidden md:block absolute bottom-0'></Image>
            </div>
            <div className='contact-form space-y-5 w-full p-5 md:p-14'>
                <button className='uppercase bg-gray-100 text-gray-800 p-1'>Make Appointment</button>
                <h1 className='text-white text-4xl font-bold'>Apply for free treatment</h1>
                <div className='flex gap-5'>
                    <input type='text' className='px-3 py-2 bg-sky-500 w-full' placeholder='Your Name'></input>
                    <input type='text' className='px-3 py-2 bg-sky-500 w-full' placeholder='Your Email'></input>
                </div>
                <div className='flex gap-5'>
                    <input type='text' className='px-3 py-2 bg-sky-500 w-full' placeholder='Doctor Name'></input>
                    <input type='text' className='px-3 py-2 bg-sky-500 w-full' placeholder='Disease Name'></input>
                </div>
                <div>
                    <button className='btn'>Book now</button>
                </div>
            </div>
    </div>
  )
}

export default Contact

// <h1 className='text-3xl'>Contact With Us</h1>
// <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
// <ul className='space-y-3'>
//  <li className='flex gap-3 items-center'><BsFillTelephoneInboundFill></BsFillTelephoneInboundFill>+88 01750 14 14 14</li>
//  <li className='flex gap-3 items-center'><FaLocationDot></FaLocationDot>Dhanmondi, Dhaka, Bangladesh</li>
// </ul>