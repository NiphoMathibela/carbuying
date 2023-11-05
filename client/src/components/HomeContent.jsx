import React from 'react'
import Income from './Income'
import PopularCarsCard from './PopularCarsCard'
import CarCard from './CarCard'
import ForSaleCard from './ForSaleCard'
import Slider from './Slider'
import { carData } from '../assets/carData'
import Arccordian from './Arccordian'
import FilterBar from './FilterBar'

const HomeContent = () => {

  const forSale = carData.map(car => 
  <ForSaleCard
    car={car.car}
    brand={car.brand}
    img={car.img}
    gearType={car.gearType}
    consumption={car.consumption}
    seats={car.seats}
    price={car.price}
    year={car.year}
    model={car.model}
  />)

  return (
    <div className='w-full'>
        <div className=' font-semibold text-sm text-[#90A3BF] my-4 text-left'>Popular Cars</div>
        <Slider/>
        <div className=' font-semibold text-sm text-[#90A3BF] my-4 text-left'>Cars For Sale</div>

        {/* Filter bar and cars for sale */}
        <div className='flex flex-row w-full'>
        <div className=' w-3/12 mr-4 pt-3 rounded-md drop-shadow-md'>
          <FilterBar/>
        </div>
        <div className=' w-5/6'>
          {forSale}
        </div>
        </div>
    </div>
  )
}

export default HomeContent