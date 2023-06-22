import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Hero from './Hero'

const Main = () => {
  return (
    <div className='w-full top-16 absolute p-6'>
        <SearchBar/>
        <Hero/>
    </div>
  )
}

export default Main