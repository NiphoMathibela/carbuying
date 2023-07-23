import React from 'react'
import Income from './Income'
import PopularCarsCard from './PopularCarsCard'
import CarCard from './CarCard'
import Slider from './Slider'
import Slider2 from './Slider2'

const HomeContent = () => {
  return (
    <div className='absolute'>
        <Income/>
        <Slider2/>
        {/* <CarCard car="Polo" gearType="Manual" consumption="5.2" seats="5" price="450,000" brand="Volkswagen" img="https://github.com/NiphoMathibela/carbuying/blob/main/client/src/assets/Polo%20Trendline.png?raw=true"/> */}
        
    </div>
  )
}

export default HomeContent