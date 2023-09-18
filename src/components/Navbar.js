'use client'
import ThemeBtn from "./ThemeBtn"
import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from "next/link"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { Fragment } from "react"
const Navbar = () => {
    const {data:session}=useSession();
    return (
          <div className="flex justify-between sticky top-0 z-50 px-2 py-1 items-center md:px-20 bg-sky-600 dark:bg-gray-900">
            <div className="flex flex-row-reverse gap-10 justify-around items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="w-full">
                    <Image src={logo} alt="" className="w-[40%]" />
                </div>
            </div>
            <div className="hidden w-full lg:flex justify-end">
                <ul className="flex gap-5 text-white px-1">
                    <li className="cursor-pointer"><Link href={'/'}>Home</Link></li>
                    <li className="cursor-pointer"><Link href={'/profile'}>Doctor Profile</Link></li>
                    <li className="cursor-pointer"><Link href={'/appointment'}>appointment</Link></li> 
                    <li className="cursor-pointer"><Link href={'/contact'}>Contact Us</Link></li> 
                    {
                        (session?.user)?<Fragment>
                        <li className="cursor-pointer"><Link href={'/dashboard'}>Dashboard</Link></li>
                        <li className="cursor-pointer"><button onClick={()=>signOut()}>Logout</button></li>
                        </Fragment>
                        :
                        <li className="cursor-pointer"><Link href={'/login'}>Login</Link></li>
                    }
                </ul>
            </div>
            <div className="fixed top-[50%] right-1">
               <ThemeBtn></ThemeBtn>
            </div>
        </div>
    )
    
}

export default Navbar