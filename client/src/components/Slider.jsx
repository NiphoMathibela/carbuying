import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, {useEffect, useState} from 'react'
import PopularCarsCard from './PopularCarsCard';
import { carData } from '../assets/carData';

const Slider = () => {

    const [screenWidth, setScreenW] = useState(window.innerWidth);
    const [slideSize, setSlideSize] = useState(1.4);

    useEffect(() => {
        function handleResize() {

            setScreenW(window.innerWidth);

            if(screenWidth >= 390 ){
                setSlideSize(6)
            }else if(screenWidth >= 420){
                setSlideSize(2)
            } else if(screenWidth >= 700){
                setSlideSize(4)
            }
            else{
                setScreenW(1.4)
            }
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1.6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {carData.map(car => <SwiperSlide>
                <PopularCarsCard car={car.car} gearType={car.gearType} consumption={car.consumption} seats={car.seats} price={car.price} brand={car.brand} img={car.img} />
            </SwiperSlide>)}
        </Swiper>
    )
}

export default Slider;