import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../context/AppContext';

const MobileMenu = () => {

    const {menuIsOpen, setIsMenuOpen} = useContext(appContext);

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
        <div className='w-full h-screen fixed mx-auto z-40 top-12 bg-[#F6F7F9] bg-opacity-80 sm:hidden'>
            <div className='text-[#3563E9] text-lg font-medium'>
                <li className='my-4 cursor-pointer' onClick={NavigateSellCar} >Sell car</li>
                <li className='my-4 cursor-pointer' onClick={NavigateLogin}>Login</li>
            </div>
        </div>
    )
}

export default MobileMenu