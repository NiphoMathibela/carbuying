import React from 'react'
import MainButton from '../components/MainButton'

const SellCar = () => {
  return (
    <div className='px-4'>
        <div className=' w-full h-72 rounded-md mx-auto my-4'>
            <img className='w-full object-cover object-center rounded-md max-h-72' src='https://images.unsplash.com/photo-1604447199408-9798f9f64f88?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
 
        <h2 className='text-3xl font-bold text-[#3563E9]'>Sell your car instantly</h2>

        {/* Selling  car form */}
        <div className=' w-full shadow-lg mx-auto rounded p-3 mt-4 lg:w-4/6 xl:w-2/5 lg:p-5'>

            <div className='my-2'>
                <p className='text-left font-semibold text-lg'>Make</p>
                <input type="text" id='makeAndModel' name='makeAndModel' className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter make'/>
            </div>

            <div className='my-2'>
                <p className='text-left font-semibold text-lg'>Model</p>
                <input type="text" id='model' name='model' className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter model'/>
            </div>

            <div className='my-2'>
                <p className='text-left font-semibold text-lg'>Year</p>
                <input type="year" id='year' name='year' className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 2018'/>
            </div>

            <div className='my-2'>
                <p className='text-left font-semibold text-lg'>Milieage</p>
                <input type="text" id='mileage' name='mileage' className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 15000'/>
            </div>

            <div className='my-2'>
                <p className='text-left font-semibold text-lg'>Location</p>
                <input type="location" id='makeAndModel' name='location' className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter location'/>
            </div>

            {/* Form buttons */}
            <div>
                <MainButton btnText="Reset"/>
                <MainButton btnText="Sell"/>
            </div>
        </div>
    </div>
  )
}

export default SellCar