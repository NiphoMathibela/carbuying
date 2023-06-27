import React from 'react'
import Income from './Income'
import PopularCarsCard from './PopularCarsCard'
import CarCard from './CarCard'

const HomeContent = () => {
  return (
    <div>
        <Income/>
        <PopularCarsCard car="Polo" gearType="Manual" consumption="5.2" seats="5" price="450,000" brand="Volkswagen" img="https://github.com/NiphoMathibela/carbuying/blob/main/client/src/assets/Polo%20Trendline.png?raw=true"/>
        <CarCard car="Polo" gearType="Manual" consumption="5.2" seats="5" price="450,000" brand="Volkswagen" img="https://github.com/NiphoMathibela/carbuying/blob/main/client/src/assets/Polo%20Trendline.png?raw=true"/>
    </div>
  )
}

export default HomeContent