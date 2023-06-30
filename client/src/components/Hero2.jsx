import React from 'react'
import vw from '../assets/vw.png'

const Hero2 = () => {
    return (
        <div className='flex justify-between'>
            <div className=' w-full bg-gradient-to-t from-[#54A6FF] to-[#85A8F8] mt-6 rounded-md mr-2 p-2 flex-1'>
                <div className='text-white font-bold text-xl text-left'>
                    Buy a car based on your income
                </div>
                <div className='mb-8 text-center m-auto'>
                    <img src={vw} alt="vw-up" className='object-cover w-11/12 ' />
                </div>
            </div>
            <div className=' w-full bg-gradient-to-t from-[#54A6FF] to-[#85A8F8] mt-6 rounded-md ml-2 p-2 flex-1'>
                <div className='text-white font-bold text-xl text-left'>
                    Buy a car based on your income
                </div>
                <div className='mb-8 text-center m-auto'>
                    <img src={vw} alt="vw-up" className='object-cover w-11/12 ' />
                </div>
            </div>
        </div>

    )
}

export default Hero2