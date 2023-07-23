import React from 'react'
import PopularCarsCard from './PopularCarsCard';
import { carData } from '../assets/carData';

const Slider2 = () => {

    const slide  = carData.map(car => <PopularCarsCard car={car.car} gearType={car.gearType} consumption={car.consumption} seats={car.seats} price={car.price} brand={car.brand} img={car.img} />);
  return (
    <div className='flex flex-row overflow-x-scroll relative'>
        {slide}
    </div>
  )
}

export default Slider2