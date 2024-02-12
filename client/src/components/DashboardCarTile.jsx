import React from "react";
import { IoHeartOutline } from 'react-icons/io5'
import { BsFuelPump } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'
import { SlSpeedometer } from 'react-icons/sl'
import { useNavigate } from "react-router-dom";

const DashboardCarTile = (props) => {

  let navigate = useNavigate();

  return (
    <div className="flex flex-row w-full h-fit bg-[#F6F7F9] rounded-md drop-shadow-md p-2 my-3 cursor-pointer">
      {/* Displaying image */}
      <div className=" w-32 sm:w-72 my-auto" onClick={() => navigate(`/car/${props.carId}`)}>
        <img src={props.img}/>
      </div>

      {/* Displaying car details */}
      <div className=" h-full w-full">
        <div className=" flex flex-row justify-between" onClick={() => navigate(`/car/${props.carId}`)}>
          <p className="text-[#1A202C] font-semibold text-sm">
            {props.year} {props.brand} {props.car} 
          </p>
        </div>
        <div className="text-[#1A202C] font-semibold text-sm text-left">
            {props.model}
        </div>
        <div className="text-left">
          <p className=" text-md text-[#3563E9] font-bold">R {props.price}</p>
        </div>

        {/* Icons row */}
        <div className="flex flex-row items-center justify-between bottom-6 w-full sm:w-[60%]">
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

export default DashboardCarTile;
