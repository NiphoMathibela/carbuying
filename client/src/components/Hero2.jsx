import React from 'react'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

const Hero2 = () => {

    let navigate = useNavigate();

    //Car searching
    const searchForCar = () => {

        //Navigate to search page
        navigate("/carSearch");
    }
    return (
        <div className=' h-80 w-full bg-[center_bottom_-1rem]  overflow-hidden rounded-md bg-no-repeat bg-[url("https://images.unsplash.com/photo-1604505297763-88cd7705316b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1463&q=80")]'>
            <div className=' w-full h-full bg-black/30 backdrop-brightness-75'>
            <div className=' w-4/5 absolute mt-28 rounded-md mr-2 p-6 flex-1'>
                <div className=' text-left'>
                    <p className='text-white font-bold text-5xl mb-4'>Buy your dream car</p>
                    <div className=' w-[420px]'>
                    <SearchBar searchFunction={searchForCar}/>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Hero2