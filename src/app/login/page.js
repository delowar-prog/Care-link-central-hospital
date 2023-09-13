import Image from 'next/image'
import logimg from '../../assets/Frame--.png'
import loginImg from '../../assets/Frame.png'
import Link from 'next/link'
const loginPage = () => {
    return (
        <div className='mx-20 my-10 flex gap-5 items-center'>
            <div className='relative bg-sky-600 p-10 w-full'>
                <Image src={logimg} alt={'image'} className='absolute top-0 right-0'></Image>
                <Image src={loginImg} alt={'image'}></Image>
            </div>
            <div className='w-full'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h2 className='text-xl font-bold'>Sigin to Care Link Hospital</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-600 text-white hover:text-black">Login</button>
                        </div>
                        <p>Create a new account <span className='text-sky-600'><Link href={'/register'}>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loginPage