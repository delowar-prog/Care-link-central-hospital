import React from 'react'
import { BsStopwatch, BsFillTelephoneInboundFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

const Card = () => {
  return (
    <div className='flex flex-col md:flex-row px-3 md:px-20 my-32 gap-8'>
        <div className='bg-sky-600 hover:bg-yellow-800 cursor-pointer w-full text-white px-8 py-12 flex gap-3 rounded-xl'>
            <div><BsStopwatch className='text-3xl'></BsStopwatch></div>
            <div>
                <h1 className='text-2xl'>Opening Hours</h1>
                <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
        </div>
        <div className='bg-sky-600 hover:bg-yellow-800 cursor-pointer w-full text-white px-8 py-12 flex gap-3 rounded-xl'>
            <div><FaLocationDot className='text-3xl'></FaLocationDot></div>
            <div>
                <h1 className='text-2xl'>Our Locations</h1>
                <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
            </div>
        </div>
        <div className='bg-sky-600 hover:bg-yellow-800 cursor-pointer w-full text-white px-8 py-12 flex gap-3 rounded-xl'>
            <div><BsFillTelephoneInboundFill className='text-3xl'></BsFillTelephoneInboundFill></div>
            <div>
                <h1 className='text-2xl'>Contact Us</h1>
                <p>+88 01750 00 00 00 <br></br>
                +88 01750 00 00 00</p>
            </div>
        </div>
    </div>
  )
}

export default Card