import { BsFillTelephoneInboundFill } from "react-icons/bs"

const MakeAppointment = () => {
  return (
    <div className='bg-gray-300 mb-5 rounded-xl'>
        <div className='relative bg-sky-500 text-white p-5'>
            <h2 className='text-2xl mb-2'>Make an Appointment</h2>
            <p className="flex gap-5 text-xl"><BsFillTelephoneInboundFill></BsFillTelephoneInboundFill> 01700-50 55 55 55</p>
            <div className="absolute -bottom-4 left-[45%] bg-red-500 w-8 h-8 rounded-full flex justify-center items-center"><p>OR</p></div>
        </div>
        <div className="p-5">
            <form className="space-y-2">
                <input className="border border-gray-300 px-3 py-2 w-full" type="text" placeholder="Full Name"></input><br/>
                <input className="border border-gray-300 px-3 py-2 w-full" type="text" placeholder="Phone Number"></input><br/>
                <input className="border border-gray-300 px-3 py-2 w-full" type="text" placeholder="Email Address"></input><br/>
                <input className="border border-gray-300 px-3 py-2 w-full" type="date" placeholder="Appointment Date"></input><br/>
                <textarea className="border border-gray-300 px-3 py-2 w-full" placeholder="Message"></textarea><br/>
                <button className="bg-sky-500 hover:bg-sky-400 px-5 py-2 text-white w-full uppercase" type="submit">Submit Request</button>
            </form>
        </div>
    </div>
  )
}

export default MakeAppointment