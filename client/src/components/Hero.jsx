import React, { useState, useEffect } from 'react'
import vw from '../assets/vw.png'
import Hero2 from './Hero2';

const Hero = () => {
    const [screenWidth, setScreenW] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {

            setScreenW(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        <>
            {screenWidth < 810 ? <div className=' w-full bg-gradient-to-t from-[#54A6FF] to-[#85A8F8] h-60 min-[500px]:h-96 mt-6 rounded-md mx-auto p-2'>
                <div className='text-white font-bold text-xl text-left'>
                    Buy a car based on your income
                </div>
                <div className='mb-8 text-center m-auto'>
                    <img src={vw} alt="vw-up" className='object-cover w-11/12 ' />
                </div>
            </div> : <Hero2 />}
        </>
    )
}

export default Hero