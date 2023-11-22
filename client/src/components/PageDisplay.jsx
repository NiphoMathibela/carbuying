import React from "react";
import FilterBar from "./FilterBar";
import ForSaleCard from "./ForSaleCard";
import { carData } from "../assets/carData";
import { useNavigate } from "react-router-dom";

const PageDisplay = () => {
  let navigate = useNavigate();

  const carDetail = (id) => {
    navigate(`/car/${id}`)
  }

  const forSale = carData.map((car) => (
    <ForSaleCard
      key={car.id}
      car={car.car}
      brand={car.brand}
      img={car.img}
      gearType={car.gearType}
      consumption={car.consumption}
      seats={car.seats}
      price={car.price}
      year={car.year}
      model={car.model}
      onClick={carDetail(car.id)}
    />
  ));
  return (
    <div className="flex column justify-center w-full mx-auto">
      <div className=" w-1/3  mt-3">
        <FilterBar />
      </div>
      <div className="w-full ml-5">{forSale}</div>
    </div>
  );
};

export default PageDisplay;
