import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

import { carData } from "../assets/carData";

export const appContext = createContext();

const AppContextProvider = (props) => {

  //Searching function states
  const [filterTags, setFilterTags] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Register formm states
  const [regDetails, setRegDetails] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    typeOfUser: "",
  })

  //Register form states
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    typeOfUser: "",
  })

  //Creating new users
  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, regDetails.email, regDetails.password);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

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

  //Filtering function updated
  const FilteringCars = (searchText, filterTags, carData) => {

    let filteredItems = carData;

    if (searchText !== "") {
      filteredItems = filteredItems.filter(
        (product) => product.car.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    }

    if (filterTags.length > 0) {
      filteredItems = filteredItems.filter(car => filterTags.every(item => Object.values(car).some(value => value.includes(item))))
    }

    console.log(filteredItems)

    return filteredItems;

  }

  const searchedCars = FilteringCars(searchText, filterTags, carData)

  return (
    <appContext.Provider value={{ filterTags, setFilterTags, filteredCars, setFilteredCars, FilterCars, searchText, setSearchText, searchedCars, regDetails, setRegDetails, loginDetails, setLoginDetails, Register }}>
      {props.children}
    </appContext.Provider>
  )
}

export default AppContextProvider;         