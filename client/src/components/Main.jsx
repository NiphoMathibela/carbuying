import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Hero from './Hero'
import HomeContent from './HomeContent'

const Main = () => {
  return (
    <div className='w-full top-16 absolute p-6'>
        {/* <SearchBar/> */}
        <Hero/>
        <HomeContent/>
    </div>
  )
}

export default Main