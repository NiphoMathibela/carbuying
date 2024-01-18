import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'

const Main = () => {
  return (
    <div className='w-10/12 max-w-6xl mx-auto top-44 p-6'>
        <Hero/>
        <HomeContent/>
    </div>
  )
}

export default Main