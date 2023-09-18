'use client'
import Image from 'next/image'
import logimg from '../../assets/Frame--.png'
import loginImg from '../../assets/Frame.png'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const loginPage = () => {
    const router=useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(!email||!password){
            setError('Field must not be empty');
            return;
        }
        try {
            const res=await signIn('credentials',{
                email, 
                password, 
                redirect:false,
            });
            if(res.error){
                setError('Invalid Credentials');
                return
            }
            router.replace('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mx-3 md:mx-20 my-10 flex flex-col md:flex-row gap-5 items-center'>
            <div className='relative bg-sky-600 p-10 w-full'>
                <Image src={logimg} alt={'image'} className='absolute top-0 right-0'></Image>
                <Image src={loginImg} alt={'image'}></Image>
            </div>
            <div className='w-full'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-xl font-bold'>Sigin to Care Link Hospital</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-600 text-white hover:text-black">Login</button>
                            </div>
                        </form>
                        {
                            error && (
                                <div>
                                    <span className='bg-red-500 p-1 text-white rounded-lg'>{error}</span>
                                </div>
                            )
                        }
                        <p>Create a new account <span className='text-sky-600'><Link href={'/register'}>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loginPage