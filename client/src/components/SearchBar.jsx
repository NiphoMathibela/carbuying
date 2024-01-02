import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { appContext } from '../context/AppContext';

const SearchBar = (props) => {

  const { setSearchText, searchText } = useContext(appContext);

  const handleSearch = (e) => {
    setSearchText(e.target.value)
    console.log(searchText)
  }
  return (
    <div className=' w-full h-8 border-solid border-2 border-r-0 border-[#3563E9] rounded-md pr-0 pl-2 flex flex-row items-center mx-auto bg-white'>
      <IoSearchOutline className=' mr-1' size={26} color='#3563E9' />
      <input placeholder='Search for your dream car' className='w-full rounded-md focus:outline-none custom-placeholder' onChange={handleSearch}></input>
      <div>
        <button className=' w-36 h-8  bg-[#3563E9] rounded-md text-white p-1 rounded-l-none'><p className=' text-base'>Search</p></button>
      </div>
    </div>
  )
}

export default SearchBar