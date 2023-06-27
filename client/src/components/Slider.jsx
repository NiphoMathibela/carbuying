import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react'
import PopularCarsCard from './PopularCarsCard';
import { carData } from '../assets/carData';

const Slider = () => {
    
  return (
    <Swiper
      spaceBetween={35}
      slidesPerView={1.4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

    {carData.map(car => <SwiperSlide>
        <PopularCarsCard car={car.car} gearType={car.gearType} consumption={car.consumption} seats={car.seats} price={car.price} brand={car.brand} img={car.img}/>
    </SwiperSlide>)}
      {/* <SwiperSlide><PopularCarsCard/></SwiperSlide>
      <SwiperSlide><PopularCarsCard/></SwiperSlide>
      <SwiperSlide><PopularCarsCard/></SwiperSlide>
      <SwiperSlide><PopularCarsCard/></SwiperSlide> */}
      ...
    </Swiper>
  )
}

export default Slider;