import React from 'react'
import Income from './Income'
import PopularCarsCard from './PopularCarsCard'
import CarCard from './CarCard'
import Slider from './Slider'
import { carData } from '../assets/carData'

const HomeContent = () => {

  const forSale = carData.map(car => 
  <CarCard
    car={car.car}
    brand={car.brand}
    img={car.img}
    gearType={car.gearType}
    consumption={car.consumption}
    seats={car.seats}
    price={car.price}
  />)

  return (
    <div>
        <Income/>
        <div className=' font-semibold text-sm text-[#90A3BF] my-4 text-left'>Popular Cars</div>
        <Slider/>
        <div className=' font-semibold text-sm text-[#90A3BF] my-4 text-left'>Cars For Sale</div>
        {forSale}
        
    </div>
  )
}

export default HomeContent