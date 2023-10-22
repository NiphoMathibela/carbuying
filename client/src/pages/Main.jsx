import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'

const Main = () => {
  return (
    <div className='w-full top-16 absolute p-6'>
        <Hero/>
        <HomeContent/>
    </div>
  )
}

export default Main