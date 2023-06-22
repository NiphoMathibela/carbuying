import React from 'react'
import Income from './Income'
import PopularCarsCard from './PopularCarsCard'

const HomeContent = () => {
  return (
    <div>
        <Income/>
        <PopularCarsCard car="Polo" gearType="Manual" consumption="5.2" seats="5" price="450,000" brand="Volkswagen"/>
    </div>
  )
}

export default HomeContent