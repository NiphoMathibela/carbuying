import React, { useContext } from "react";
import FilterBar from "./FilterBar";
import ForSaleCard from "./ForSaleCard";
import { carData } from "../assets/carData";
import { useNavigate } from "react-router-dom";
import { appContext } from "../context/AppContext";
import PopularCarsCard from "./PopularCarsCard";
import ForSaleMobile from "./ForSaleMobile";
import MobileMenu from "./MobileMenu";
import MobileFilter from "./MobileFilter";


const PageDisplay = () => {

  const { filteredCars, searchedCars } = useContext(appContext);

  //State to check if a card is cliked
  let navigate = useNavigate();

  const carDetail = (id) => {
    navigate("/carSearch")


    console.log("Clicked:", id)
  }

  const filteredSales = filteredCars.map((car) => (
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
      carId={car.id}
    />
  ));

  //Display cars for sale (Larger screens)
  const forSale = searchedCars.map((car) => (
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
      carId={car.id}
    />
  ));

  //Displaying cars for sale (Smaller screens)
  const forSaleSm = searchedCars.map((car) => (
    <ForSaleMobile
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
      carId={car.id}
    />
  ));




  return (
    <div>
      <div className="flex column justify-center w-full mx-auto ">
        <div className=" w-1/3  mt-3 none hidden sm:block">
          <FilterBar />
        </div>

        {/* Test code */}
        
        <div className="w-full hidden ml-6 sm:block">{forSale}</div>
        <div className="w-full sm:hidden">{forSaleSm}</div>

      </div>
    </div>
  );
};

export default PageDisplay;
