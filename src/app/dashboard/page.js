'use client'
import { signOut } from "next-auth/react"
const page = () => {
  return (
    <div>
          <h1>Dashboard</h1>  
          <h2>User Name: </h2>
          <button className='bg-red-500' onClick={()=>signOut()}>Logout</button>
    </div>
  )
}

export default page