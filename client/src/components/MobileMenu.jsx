import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../context/AppContext';

const MobileMenu = () => {

    const { menuIsOpen, setIsMenuOpen, LogOut } = useContext(appContext);

    let navigate = useNavigate();

    //Navigating page
    const NavigateSellCar = () => {
        navigate("/sellCar");
        setIsMenuOpen(prev => !prev)
    }

    //Navigate login page
    const NavigateLogin = () => {
        navigate("/loginUser");
        setIsMenuOpen(prev => !prev);
    }

    return (
        <div className='w-full h-screen fixed mx-auto z-40 top-12 bg-[#F6F7F9] bg-opacity-85 sm:hidden'>
            <div className='text-[#3563E9] text-lg font-medium'>
                <li className='mt-4 mb-2 cursor-pointer list-none w-fit mx-auto active:bg-[#3563E9] active:text-white p-2 rounded-md' onClick={NavigateSellCar} >Sell a car</li>
                <li className='my-2 cursor-pointer list-none w-fit mx-auto active:bg-[#3563E9] active:text-white p-2 rounded-md' onClick={NavigateLogin}>Login</li>
                <li className='my-2 cursor-pointer list-none w-fit mx-auto active:bg-[#3563E9] active:text-white p-2 rounded-md' onClick={LogOut}>Sign out</li>
            </div>
        </div>
    )
}

export default MobileMenu