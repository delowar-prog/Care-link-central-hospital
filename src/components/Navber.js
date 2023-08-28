import ThemeBtn from "./ThemeBtn"
import Image from 'next/image'
import logo from '../assets/logo.png'
const Navber = () => {
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
                <div>
                    <Image src={logo} alt="" className="w-[80%]" />
                </div>
            </div>
            <div className="hidden lg:flex justify-between">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Appointment</a></li> 
                    <li><a>Contact Us</a></li> 
                    <li><a>Login</a></li>
                   
                </ul>
            </div>
            <div className="fixed top-[50%] right-1">
               <ThemeBtn></ThemeBtn>
            </div>
        </div>
    )
}

export default Navber