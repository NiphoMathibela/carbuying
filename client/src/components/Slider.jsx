import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react'
import PopularCarsCard from './PopularCarsCard';
import { carData } from '../assets/carData';

const Slider = () => {

    return (
        <Swiper
            spaceBetween={20}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                300: {
                    slidesPerView: 1.4,
                    showSwitchArrows: false
                },
                450: {
                    slidesPerView: 1.6,
                },
                500: {
                    slidesPerView: 1.8
                },
                570: {
                    slidesPerView: 2.2
                },
                620: {
                    slidesPerView: 2.4
                },
                700: {
                    slidesPerView: 2.6
                },
                750: {
                    slidesPerView: 2.8
                },
                800: {
                    slidesPerView: 3
                },
                860: {
                    slidesPerView: 3.2
                },
                880: {
                    slidesPerView: 3.4
                },
                950: {
                    slidesPerView: 3.7
                },
                1000: {
                    slidesPerView: 3.9
                },
                1080: {
                    slidesPerView: 4.2,
                    showSwitchArrows: true
                }

            }}
        >

            {carData.map(car => <SwiperSlide>
                <PopularCarsCard car={car.car} gearType={car.gearType} consumption={car.consumption} seats={car.seats} price={car.price} brand={car.brand} img={car.img} />
            </SwiperSlide>)}
        </Swiper>
    )
}

export default Slider;