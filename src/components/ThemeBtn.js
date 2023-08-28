'use client'
import { useTheme } from 'next-themes'
import { FaMoon} from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { useEffect, useState } from 'react';
const ThemeBtn = () => {
    const {theme, setTheme}=useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) {
        return null
      }
  return (
    <button className="btn btn-success btn-sm" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
        {theme==='dark'?<BsSun className='text-yellow-500'></BsSun>:<FaMoon className='text-yellow-500'></FaMoon>}
    </button>
  )
}

export default ThemeBtn