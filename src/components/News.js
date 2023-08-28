import Image from "next/image"
import pic1 from '../assets/drugs.jpg'
import pic2 from '../assets/heart.jpg'
import pic3 from '../assets/usa-hospitals.jpg'
import { BsStopwatch, BsZoomIn } from 'react-icons/bs'
import './News.css'
const News = () => {
  return (
    <div className=' px-3 md:px-20 my-32'>
    <div className="w-[75%] mx-auto text-center my-10">
        <h1 className="text-3xl my-3">Latest News</h1>
        <p>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
    </div>
    <div className='card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='border border-gray-300'>
           <Image src={pic1} className="h-60" alt="image"></Image>
           <div className="p-5 relative">
                <span className="flex gap-2 items-center"><BsStopwatch></BsStopwatch> August 18, 2023</span>
                <h1 className="text-2xl my-4">Are drugs the best solution?</h1>
                <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla.</p>
                <div className="absolute -top-5 left-[46%] bg-sky-500 hover:bg-white transition-all cursor-pointer border border-sky-500 w-10 h-10 rounded-full flex justify-center items-center text-gray-100 hover:text-sky-600"><BsZoomIn></BsZoomIn></div>
           </div>
        </div>
        <div className='border border-gray-300'>
           <Image src={pic2} className="h-60" alt="image"></Image>
           <div className="p-5 relative">
                <span className="flex gap-2 items-center"><BsStopwatch></BsStopwatch> August 22, 2023</span>
                <h1 className="text-2xl my-4">Negative statin stories add to heart health risk</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <div className="absolute -top-5 left-[46%] bg-sky-500 hover:bg-white transition-all cursor-pointer border border-sky-500 w-10 h-10 rounded-full flex justify-center items-center text-gray-100 hover:text-sky-600"><BsZoomIn></BsZoomIn></div>
           </div>
        </div>
        <div className='border border-gray-300'>
           <Image src={pic3} className="h-60" alt="image"></Image>
           <div className="p-5 relative">
                <span className="flex gap-2 items-center"><BsStopwatch></BsStopwatch> August 5, 2023</span>
                <h1 className="text-2xl my-4">2015 Best USA Hospitals and Clinics</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <div className="absolute -top-5 left-[46%] bg-sky-500 hover:bg-white transition-all cursor-pointer border border-sky-500 w-10 h-10 rounded-full flex justify-center items-center text-gray-100 hover:text-sky-600"><BsZoomIn></BsZoomIn></div>
           </div>
        </div>
    </div>
</div>
  )
}

export default News