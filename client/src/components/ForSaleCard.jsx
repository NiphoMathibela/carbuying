import React from "react";
import { IoHeartOutline } from 'react-icons/io5'
import { BsFuelPump } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'
import MainButton from './MainButton'

const ForSaleCard = (props) => {
  return (
    <div className="flex flex-row w-full h-52 bg-[#F6F7F9] rounded-md drop-shadow-md p-2 my-3 mx-auto'">
      <div className="w-72 my-auto">
        <img src={props.img}/>
      </div>
      <div className="">
        <div className=" flex flex-row justify-between">
          <p className="text-[#1A202C] font-semibold text-base">
            {props.year} {props.brand} {props.car} 
          </p>
          <div className="">
          <IoHeartOutline size={24} color="#90A3BF" />
          </div>
        </div>
        <div className="text-[#1A202C] font-semibold text-base text-left">
            {props.model}
        </div>
        <div className="text-left">
          <p>R {props.price}</p>
        </div>
        <div className="flex flex-row items-center justify-between absolute bottom-11 w-11/12">
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <BsFuelPump size={16} color="#90A3BF" /> {props.consumption}
          </p>
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <TbManualGearbox size={16} color="#90A3BF" /> {props.gearType}
          </p>
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <BsPeopleFill size={16} color="#90A3BF" /> {props.seats}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForSaleCard;
