import React, { createContext, useState } from "react";
import axios from "axios";
import { carData } from "../assets/carData";

export const appContext = createContext();

const AppContextProvider = (props) => {

  const [filterTags, setFilterTags] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  //Filtering func
 const FilterCars = () => {
    carData.map((car => {
      const containsAll = filterTags.every(item => Object.values(car).some(value => value.includes(item)));
      if (containsAll) {
        setFilteredCars(prev => [...prev, car]);
        console.log("Filtered:", filteredCars)
      }
    }))
 }
  return (
        <appContext.Provider value={{filterTags, setFilterTags, filteredCars, setFilteredCars, FilterCars}}>
            {props.children}
        </appContext.Provider>
  )
}

export default AppContextProvider;