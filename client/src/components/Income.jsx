import React from 'react'
import MainButton from './MainButton'

const Income = () => {
  return (
    <div className=' w-full h-32 rounded-md my-3 bg-white p-2 drop-shadow-lg'>
        <p className='text-left font-semibold text-base'>Enter your net-income</p>
        <input className='w-full h-8 p-1 rounded-md border-[#C3D4E966] border-solid border my-2'></input>
        <div>
        <MainButton btnText="Find A car"/>
        </div>
    </div>
  )
}

export default Income