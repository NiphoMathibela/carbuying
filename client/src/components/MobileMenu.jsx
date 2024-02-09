import React from 'react'
import { useNavigate } from 'react-router-dom'

const MobileMenu = () => {

    let navigate = useNavigate();
    return (
        <div className='w-full h-screen fixed mx-auto z-40 top-12 bg-[#F6F7F9] bg-opacity-80 sm:hidden'>
            <div className='text-[#3563E9] text-lg font-medium'>
                <li className='my-4 cursor-pointer' onClick={() => navigate("/sellCar")} >Sell car</li>
                <li className='my-4 cursor-pointer' onClick={() => navigate("/loginUser")}>Login</li>
            </div>
        </div>
    )
}

export default MobileMenu