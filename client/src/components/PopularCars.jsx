import React from 'react'
import PopularCarsCard from './PopularCarsCard';
import { carData } from '../assets/carData';

const PopularCars = () => {

    const slide  = carData.map(car => <PopularCarsCard car={car.car} gearType={car.gearType} consumption={car.consumption} seats={car.seats} price={car.price} brand={car.brand} img={car.img} />);
  return (
    <div className='flex flex-row overflow-x-scroll '>
        {slide}
    </div>
  )
}

export default PopularCars