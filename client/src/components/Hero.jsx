import React from 'react'
import vw from '../assets/vw.png'

const Hero = () => {
    return (
        <div className=' w-full bg-gradient-to-t from-[#54A6FF] to-[#85A8F8] h-60 mt-6 rounded-md mx-auto p-2'>
            <div className='text-white font-bold text-xl text-left'>
                Buy a car based on your income
            </div>
            <div className='mb-8'>
                <img src={vw} alt="vw-up"/>
            </div>
        </div>
    )
}

export default Hero