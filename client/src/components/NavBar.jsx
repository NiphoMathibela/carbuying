import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row fixed top-0 left-0 right-0 justify-between items-center p-6 w-full h-14 bg-white z-20'>
        <div className='text-xl text-[#3563E9] font-semibold'>
            Cars4Youth
        </div>
        <div className='flex flex-row justify-between'>
            <button className='w-20 h-8 bg-[#3563E9] rounded-md text-white'>Sign In</button>
        </div>
    </div>
  )
}

export default NavBar