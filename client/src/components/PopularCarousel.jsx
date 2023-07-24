import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carData } from '../assets/carData';
import PopularCarsCard from './PopularCarsCard';

import React from 'react'

const PopularCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 5.6,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 420,
                        min: 0
                    },
                    items: 1.4,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 420
                    },
                    items: 1.4,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {carData.map(car => <div>
                <PopularCarsCard car={car.car} gearType={car.gearType} consumption={car.consumption} seats={car.seats} price={car.price} brand={car.brand} img={car.img} />
            </div>)}
        </Carousel>
    )
}

export default PopularCarousel

