import React from "react";
import Income from "./Income";
import PopularCarsCard from "./PopularCarsCard";
import CarCard from "./CarCard";
import ForSaleCard from "./ForSaleCard";
import Slider from "./Slider";
import { carData } from "../assets/carData";
import Arccordian from "./Arccordian";
import FilterBar from "./FilterBar";
import PageDisplay from "./PageDisplay";

const HomeContent = () => {
  // const forSale = carData.map((car) => (
  //   <ForSaleCard
  //     car={car.car}
  //     brand={car.brand}
  //     img={car.img}
  //     gearType={car.gearType}
  //     consumption={car.consumption}
  //     seats={car.seats}
  //     price={car.price}
  //     year={car.year}
  //     model={car.model}
  //   />
  // ));

  return (
    <div className="w-full">
      <div className=" font-semibold text-sm text-[#90A3BF] my-4 text-left">
        Popular Cars
      </div>
      <Slider />
      <div className=" font-semibold text-sm text-[#90A3BF] my-4 text-left">
        Cars For Sale
      </div>

      {/* Filter bar and cars for sale */}

      <PageDisplay/>
    </div>
  );
};

export default HomeContent;
