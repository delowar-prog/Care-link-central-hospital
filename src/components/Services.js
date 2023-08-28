'use client'
import Image from "next/image"
import serviceImg from '../assets/service.png'
import teeth from '../assets/teeth.png'
import cosmetic from '../assets/cosmetic-surgery.jpg'
import gestrology from '../assets/geshtrology.png'
// import './Services.css'
import { useState } from "react"
const Services = () => {
    const [toggle, setToggle] = useState(1)

    const handleToggle = (id) => {
        setToggle(id)
    }
    return (
        <div className='flex flex-col md:flex-row px-3 md:px-20 my-32 gap-8'>
            <div className='w-full'>
                <Image src={serviceImg} alt='bannerImage'></Image>
            </div>
            <div className="Services w-full">
                <h1 className="text-3xl my-3">Our Services</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="tab-section my-5">
                    <ul className="flex justify-between gap-5 border rounded-xl">
                        <li onClick={() => handleToggle(1)} className={`p-5 cursor-pointer rounded-xl border-r ${toggle === 1 ? 'bg-yellow-800' : ''}`}>Cavity Protection</li>
                        <li onClick={() => handleToggle(2)} className={`p-5 cursor-pointer rounded-xl border-l border-r ${toggle === 2 ? 'bg-yellow-800' : ''}`}>Cosmetic Surgery</li>
                        <li onClick={() => handleToggle(3)} className={`p-5 cursor-pointer rounded-xl border-l ${toggle === 3 ? 'bg-yellow-800' : ''}`}>Electro Gastrology</li>
                        {
                            // <li className="p-5 bg-yellow-800 rounded-xl">Oral Surgery</li>
                            // <li className="p-5 bg-yellow-800 rounded-xl">Gastrology</li>
                            // <li className="p-5 bg-yellow-800 rounded-xl">Orthopedic</li>
                        }

                    </ul>
                </div>
                <div className="tab-content">
                    <div className={`${toggle === 1 ? 'block' : 'hidden'}`}>
                        <div>
                            <Image src={teeth} alt='image' className="my-5"></Image>
                            <h1 className="text-3xl my-2">Cavity Protection</h1>
                            <p>Cavity protection is essential for maintaining strong and healthy teeth. Regular brushing and flossing, along with fluoride treatments, contribute to effective cavity prevention.Modern toothpaste formulations emphasize cavity protection through active ingredients like fluoride, which strengthens enamel and helps prevent tooth decay.Dental professionals often recommend maintaining a balanced diet low in sugary foods and drinks to support cavity protection, as sugars can contribute to the growth of cavity-causing bacteria</p><br></br>
                            <p>Sealants are another effective tool for cavity protection, especially for molars and premolars. These thin protective coatings are applied to the chewing surfaces of teeth to prevent bacteria and food particles from getting trapped.</p>
                            <button className="btn btn-success btn-sm my-2">Read More</button>
                        </div>
                    </div>
                    <div className={`${toggle === 2 ? 'block' : 'hidden'}`}>
                        <Image src={cosmetic} alt='image' className="my-5 rounded-xl"></Image>
                        <h1 className="text-xl">Cosmetic Surgery</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vitae similique eius fuga quod iure ipsum maiores minus blanditiis, expedita aliquam quisquam eveniet rem voluptas harum temporibus explicabo magni. Tenetur.</p> <br></br>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vitae similique eius fuga quod iure ipsum maiores minus blanditiis, expedita aliquam quisquam eveniet rem voluptas harum temporibus explicabo magni. Tenetur.</p>
                        <button className="btn btn-success btn-sm my-2">Read More</button>
                    </div>
                    <div className={`${toggle === 3 ? 'block' : 'hidden'}`}>
                        <Image src={gestrology} alt='image' className="my-5 w-full rounded-xl"></Image>
                        <h1 className="text-xl">Electro Gestrology Therepy</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vitae similique eius fuga quod iure ipsum maiores minus blanditiis, expedita aliquam quisquam eveniet rem voluptas harum temporibus explicabo magni. Tenetur.</p> <br></br>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vitae similique eius fuga quod iure ipsum maiores minus blanditiis, expedita aliquam quisquam eveniet rem voluptas harum temporibus explicabo magni. Tenetur.</p>
                        <button className="btn btn-success btn-sm my-2">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services