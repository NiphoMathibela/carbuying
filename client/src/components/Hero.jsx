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
            {screenWidth < 810 ? <div className=' w-full bg-[url("https://images.unsplash.com/photo-1681392353640-845f079da812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] h-60 min-[500px]:h-96 mt-6 rounded-md mx-auto p-2'>
                <div className='text-white font-bold text-xl text-left'>
                    Buy a car based on your income
                </div>
                <div className='mb-8 text-center m-auto'>
                    {/* <img src={"https://images.unsplash.com/photo-1681392353640-845f079da812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} alt="vw-up" className='object-cover w-11/12 ' /> */}
                </div>
            </div> : <Hero2 />}
        </>
    )
}

export default Hero