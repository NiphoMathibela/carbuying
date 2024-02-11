import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { appContext } from '../context/AppContext';
import { IoFunnel } from "react-icons/io5";

const MobileSearch = (props) => {

    const { setSearchText, searchText, ToggleMobileFilter} = useContext(appContext);

    const handleSearch = (e) => {
        setSearchText(e.target.value)
        console.log(searchText)
    }
    return (
        <div className='flex flex-row my-6 sm:hidden'>
            <div className=' w-full h-8 border-solid border-2 border-[#3563E9] flex flex-row rounded-md pr-0 pl-2 items-center mx-auto bg-white'>
                <IoSearchOutline className=' mr-1' size={26} color='#3563E9' />
                <input placeholder='Search for your dream car' className=' w-full rounded-md focus:outline-none custom-placeholder' onChange={handleSearch}></input>
            </div>
            <div className='ml-2' onClick={ToggleMobileFilter}>
                <IoFunnel size={28} color='#3563E9'/>
            </div>
        </div>
    )
}

export default MobileSearch; 