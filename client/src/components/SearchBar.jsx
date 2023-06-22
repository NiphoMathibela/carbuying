import React from 'react'
import {IoSearchOutline } from "react-icons/io5";
import { IoFilter } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className=' w-full h-8 border-solid border-2 border-slate-600 rounded-md py-4 px-2 flex flex-row items-center mx-auto'>
        <IoSearchOutline className=' mr-1' size={24} color='#596780'/>
        <input placeholder='Find something' className='w-full rounded-md focus:outline-none'></input>
    </div>
  )
}

export default SearchBar