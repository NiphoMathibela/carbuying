import React from "react";
import { BsFuelPump } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { SlSpeedometer } from "react-icons/sl";
import { useParams, Link } from "react-router-dom";
import { carData } from "../assets/carData";

const CarDetail = () => {
  const carId = useParams();
  const id = carId.toString();
  const carInfo = carData.find((car) => car.id == carId.id);
  console.log(carInfo);
  const { img, car, year } = carInfo;

  return (
    <div className="w-9/12 mx-auto mt-20
     ">
      <div className=" md:flex flex-row justify-between mb-4">
        <h2 className=" text-xl sm:text-3xl font-bold text-left">
          {carInfo.year} {carInfo.brand} {carInfo.car} {carInfo.model}
        </h2>
        <p className=" text-2xl sm:text-3xl text-left text-[#3563E9] font-bold">
          R {carInfo.price}
        </p>
      </div>
      {/* IMage div */}
      <div className=" w-full mx-auto bg-slate-900">
        <img src={img} className="w-full" />
      </div>

      {/* Car details */}
      <div className=" my-4 bg-white p-3">
        <p className="text-lg font-bold text-left">{carInfo.vehicleType}</p>
        <div className="flex flex-row items-center justify-between bottom-6 w-full sm:w-6/12 md:4/12 mt-4">
          <p className="flex flex-row items-center text-base text-[#90A3BF]">
            <BsFuelPump size={22} color="#90A3BF" /> {carInfo.fuel}
          </p>
          <p className="flex flex-row items-center text-base text-[#90A3BF]">
            <TbManualGearbox size={22} color="#90A3BF" /> {carInfo.gearType}
          </p>
          <p className="flex flex-row items-center text-base text-[#90A3BF]">
            <SlSpeedometer size={22} color="#90A3BF" /> {carInfo.mileage}
          </p>
        </div>

        {/* Sellers comments */}
        <p className="text-left text-xl font-bold my-4">Seller's Comments</p>
        <p className="text-base font-normal text-left">{carInfo.comments}</p>

        {/* Vehicle details table*/}
        <p className="text-left text-xl font-bold my-4">Vehicle details</p>
        <table className="w-full sm:w-6/12 border-collapse border rounded-md">
          <tr className="bg-[#F6F7F9] rounded-r-md">
            <td className="font-semibold text-left p-3">Last Updated</td>
            <td>28 November 2023</td>
          </tr>
          <tr>
            <td className="font-semibold text-left p-3">Previous owners</td>
            <td>1</td>
          </tr>
          <tr className="bg-[#F6F7F9]">
            <td className="font-semibold text-left p-3">Service History</td>
            <td>Full</td>
          </tr>
          <tr>
            <td className="font-semibold text-left p-3">Colour</td>
            <td>{carInfo.colour}</td>
          </tr>
          <tr className="bg-[#F6F7F9] ">
            <td className="font-semibold text-left p-3">Body type</td>
            <td>{carInfo.bodyType}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CarDetail;
