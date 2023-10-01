import React from 'react'
import SearchBar from './SearchBar'

const Hero2 = () => {
    return (
        <div className=' h-80 w-full bg-[center_bottom_-1rem]  overflow-hidden rounded bg-no-repeat bg-[url("https://images.unsplash.com/photo-1604505297763-88cd7705316b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1463&q=80")]'>
            <div className=' w-full h-full bg-black/30 backdrop-brightness-75'>
            <div className=' w-4/5 absolute mt-40 rounded-md mr-2 p-2 flex-1'>
                <div className=' text-left'>
                    <p className='text-white font-bold text-5xl mb-4'>Buy your dream car</p>
                    <div className=' w-5/12'>
                    <SearchBar/>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Hero2