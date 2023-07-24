import React from 'react'
import Income from './Income'
import PopularCarsCard from './PopularCarsCard'
import CarCard from './CarCard'
import Slider from './Slider'
import Slider2 from './Slider2'
import Carousel from './PopularCarousel'
import PopularCarousel from './PopularCarousel'

const HomeContent = () => {
  return (
    <div className=''>
        <Income/>
        <PopularCarousel/>
        {/* <Slider2/> */}
        {/* <CarCard car="Polo" gearType="Manual" consumption="5.2" seats="5" price="450,000" brand="Volkswagen" img="https://github.com/NiphoMathibela/carbuying/blob/main/client/src/assets/Polo%20Trendline.png?raw=true"/> */}
        
    </div>
  )
}

export default HomeContent