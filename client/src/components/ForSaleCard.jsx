import React from "react";

const ForSaleCard = (props) => {
  return (
    <div>
      <div>
        <img />
      </div>
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <p className="text-[#1A202C] font-semibold text-base">
            {props.year} {props.car} {props.model}
          </p>
          <IoHeartOutline size={24} color="#90A3BF" />
        </div>
        <div>
          <p>{props.price}</p>
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
