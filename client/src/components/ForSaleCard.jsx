import React from "react";
import { IoHeartOutline } from 'react-icons/io5'
import { BsFuelPump } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'
import { SlSpeedometer } from 'react-icons/sl'
import MainButton from './MainButton'
import { useNavigate } from "react-router-dom";

const ForSaleCard = (props) => {

  let navigate = useNavigate();

  return (
    <div className="flex flex-row w-full h-52 bg-[#F6F7F9] rounded-md drop-shadow-md p-2 my-3">
      <div className="w-72 my-auto">
        <img src={props.img}/>
      </div>
      <div className=" h-full w-full">
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
          <p className=" text-lg text-[#3563E9] font-bold">R {props.price}</p>
        </div>

        {/* Icons row */}
        <div className="flex flex-row items-center justify-between bottom-6 w-full mx-auto">
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <BsFuelPump size={16} color="#90A3BF" /> {props.consumption}
          </p>
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <TbManualGearbox size={16} color="#90A3BF" /> {props.gearType}
          </p>
          <p className="flex flex-row items-center text-xs text-[#90A3BF]">
            <SlSpeedometer size={18} color="#90A3BF" /> {props.seats}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForSaleCard;
