import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import MobileMenu from '../components/MobileMenu'
import { appContext } from '../context/AppContext'
import MobileFilter from '../components/MobileFilter'

const Main = () => {

  const {menuIsOpen, filterOpen, setFilterOpen} = useContext(appContext);
  return (
    <div>
      {menuIsOpen ? <MobileMenu/> : ""}
      {filterOpen ? <MobileFilter/> : ""}
      <div className='w-10/12 max-w-6xl mx-auto top-44 md:p-6 mt-20'>
        <Hero/>
        <HomeContent/>
    </div>
    </div>
  )
}

export default Main