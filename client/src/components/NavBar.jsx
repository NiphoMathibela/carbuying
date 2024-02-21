import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../context/AppContext'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {

  const {menuIsOpen, setIsMenuOpen, isLoggedIn, LogOut} = useContext(appContext);
  let navigate = useNavigate();

  //Setting isMneuOpen to false to open menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev )
  }
  
  return (
    <div className='flex flex-row top-0 left-0 right-0 justify-between items-center p-6 w-full h-14 bg-white z-50 fixed shadow-lg rounded-b-md'>
        <div className='text-xl text-[#3563E9] font-semibold cursor-pointer' onClick={() => navigate("/")}>
            UpWheel
        </div>

        {/* Appears on mobile screens */}
        
        <div className='cursor-pointer sm:hidden' onClick={toggleMenu}>
          {
            menuIsOpen ? <IoCloseSharp size={30} color='#3563E9'/> : <IoMenu size={30} color='#3563E9'/> 
          }
        </div>

        {/* Appears on larger screens */}
        <div className='sm:flex flex-row justify-between hidden '>
            <p onClick={() => navigate("/sellCar")} className=' mr-4 cursor-pointer text-base font-normal text-[#3563E9] underline'>Sell a car</p>
            <p onClick={() => navigate("/dashboard")} className=' mr-4 cursor-pointer text-base font-normal text-[#3563E9] underline'>Dashboard</p>
            {isLoggedIn ? <p onClick={LogOut} className='cursor-pointer w-28 h-8 bg-[#3563E9] rounded-md text-white align-baseline'>Sign Out</p> : <p onClick={() => navigate("/loginUser")} className='cursor-pointer w-28 h-8 bg-[#3563E9] rounded-md text-white align-baseline'>Sign In / Up</p>}
        </div>
    </div>
  )
}

export default NavBar