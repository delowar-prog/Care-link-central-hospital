import Image from "next/image"
import docimg1 from '../assets/doc-1.png'
import docimg2 from '../assets/doc-2.png'
import docimg3 from '../assets/doc-3.png'
import { FaLocationDot } from 'react-icons/fa6'
import { BsCalendarDate } from "react-icons/bs"
import { AiOutlineDollar } from "react-icons/ai"
import './Doctors.css'
const Doctors = () => {
    return (
        <div className=' px-3 md:px-20 my-32'>
            <div className="w-[75%] mx-auto text-center my-10">
                <h1 className="text-3xl my-3">Our Exparts Doctors</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className='card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='doc-card border border-gray-300 p-5 rounded-lg'>
                    <Image src={docimg1} alt="image" className="grayscale"></Image>
                    <div className="relative space-y-5">
                        <div className="mt-3">
                            <h1 className="text-xl">Karyen Anderson</h1>
                            <p>BTP -  Senior Physiotherapist</p>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center gap-2"><FaLocationDot></FaLocationDot>Dhanmondi, Dhaka, Bangladesh</span>
                            <span className="flex items-center gap-2"><BsCalendarDate></BsCalendarDate>Available On Mon, 22 December</span>
                            <span className="flex items-center gap-2"><AiOutlineDollar></AiOutlineDollar>$15</span>
                        </div>
                    </div>
                    <button className="border border-2 p-2 w-full mt-5 text-lg text-[#F7A582] rounded border-[#F7A582] font-bold hover:bg-[#F7A582]  hover:text-white">View Profile</button>
                </div>
                <div className='doc-card border border-gray-300 p-5 rounded-lg'>
                    <Image src={docimg2} alt="image" className="grayscale"></Image>
                    <div className="relative space-y-5">
                        <div className="mt-3">
                            <h1 className="text-xl">Karyen Anderson</h1>
                            <p>BTP -  Senior Physiotherapist</p>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center gap-2"><FaLocationDot></FaLocationDot>Dhanmondi, Dhaka, Bangladesh</span>
                            <span className="flex items-center gap-2"><BsCalendarDate></BsCalendarDate>Available On Mon, 22 December</span>
                            <span className="flex items-center gap-2"><AiOutlineDollar></AiOutlineDollar>$15</span>
                        </div>
                    </div>
                    <button className="border border-2 p-2 w-full mt-5 text-lg text-[#F7A582] rounded border-[#F7A582] font-bold hover:bg-[#F7A582]  hover:text-white">View Profile</button>
                </div>
                <div className='doc-card border border-gray-300 p-5 rounded-lg'>
                    <Image src={docimg3} alt="image" className="grayscale"></Image>
                    <div className="relative space-y-5">
                        <div className="mt-3">
                            <h1 className="text-xl">Karyen Anderson</h1>
                            <p>BTP -  Senior Physiotherapist</p>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center gap-2"><FaLocationDot></FaLocationDot>Dhanmondi, Dhaka, Bangladesh</span>
                            <span className="flex items-center gap-2"><BsCalendarDate></BsCalendarDate>Available On Mon, 22 December</span>
                            <span className="flex items-center gap-2"><AiOutlineDollar></AiOutlineDollar>$15</span>
                        </div>
                    </div>
                    <button className="border border-2 p-2 w-full mt-5 text-lg text-[#F7A582] rounded border-[#F7A582] font-bold hover:bg-[#F7A582]  hover:text-white">View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Doctors