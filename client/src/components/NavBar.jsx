import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  
  return (
    <div className='flex flex-row top-0 left-0 right-0 justify-between items-center p-6 w-full h-14 bg-white z-20'>
        <div className='text-xl text-[#3563E9] font-semibold'>
            UpWheel
        </div>
        <div className='flex flex-row justify-between'>
            <a href='/sellCar' className=' mr-4 cursor-pointer text-base font-normal text-[#3563E9] underline'>Sell a car</a>
            <a href='/loginUser' className=' w-28 h-8 bg-[#3563E9] rounded-md text-white align-baseline'>Sign In / Up</a>
        </div>
    </div>
  )
}

export default NavBar