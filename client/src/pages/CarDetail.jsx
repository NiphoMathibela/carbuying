import React from 'react';
import { BsFuelPump } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { SlSpeedometer } from 'react-icons/sl'
import { useParams, Link } from 'react-router-dom';
import { carData } from '../assets/carData';

const CarDetail = () => {

    const carId = useParams();
    const id = carId.toString();
    const carInfo = carData.find(car => car.id == carId.id);
    console.log(carInfo);
    const {img, car, year} = carInfo;

  return (
    <div className='w-9/12 mx-auto mt-28'>
        <div className=' flex flex-row justify-between mb-4'>
        <h2 className=' text-3xl font-bold text-left'>{carInfo.year} {carInfo.brand} {carInfo.car} {carInfo.model}</h2>
        <p className=" text-3xl text-left text-[#3563E9] font-bold">R {carInfo.price}</p>
        </div>
        {/* IMage div */}
        <div className=' w-full mx-auto bg-slate-900'>
        <img src={img} className='w-full'/>
        </div>

        {/* Car details */}
        <div className="flex flex-row items-center justify-between bottom-6 w-full mx-auto">
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <BsFuelPump size={16} color="#90A3BF" /> {carInfo.consumption}
          </p>
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <TbManualGearbox size={16} color="#90A3BF" /> {carInfo.gearType}
          </p>
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <SlSpeedometer size={18} color="#90A3BF" /> {carInfo.seats}
          </p>
        </div>
    </div>
  )
}

export default CarDetail