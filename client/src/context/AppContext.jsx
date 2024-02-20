import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { carData } from "../assets/carData";

export const appContext = createContext();

const AppContextProvider = (props) => {

  //Mobile filter bar states
  const [filterOpen, setFilterOpen] = useState(false);

  //NavBar States
  const [menuIsOpen, setIsMenuOpen] = useState(false);

  //Searching function states
  const [filterTags, setFilterTags] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Register formm states
  const [regDetails, setRegDetails] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
  })

  //Login form states
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  })

  //Logged in details
  const [loggedInDetails, setLoggedInDetails] = useState({
    email: "",
    name: "",
  })

  //Logged in status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Creating new users
  const Register = async () => {

    try {
      const user = await createUserWithEmailAndPassword(auth, regDetails.email, regDetails.password);
      //Testing display name


      //Posting to mongoDB User collection
      fetch("https://localhost:7069/user/User", {
        method: "POST",
        body: JSON.stringify(regDetails),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json",
          "content-type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      //Testing
      console.log(user)
      console.log(regDetails)
    } catch (error) {
      console.log(error.message)
    }
  }

  //Login existing users
  const LoginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password);
      console.log(regDetails)
      setLoggedInDetails({name: loginDetails.email, email: loginDetails.email})
    } catch (error) {
      console.log(error.message)
    }
  }

  const LogOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "/loginUser";
      // Handle successful logout logic (e.g., redirect to login page)
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error("Error logging out:", error);
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

  //ToggleMobileFilter
  const ToggleMobileFilter = () => {
    setFilterOpen(prev => !prev);
  }

  const searchedCars = FilteringCars(searchText, filterTags, carData)

  return (
    <appContext.Provider value={{
      filterTags,
      setFilterTags,
      filteredCars,
      setFilteredCars,
      FilterCars,
      searchText,
      setSearchText,
      searchedCars,
      regDetails,
      setRegDetails,
      loginDetails,
      setLoginDetails,
      Register,
      menuIsOpen,
      setIsMenuOpen,
      LoginUser,
      filterOpen,
      setFilterOpen,
      ToggleMobileFilter,
      loggedInDetails,
      setLoggedInDetails,
      isLoggedIn,
      setIsLoggedIn,
      LogOut
    }}>
      {props.children}
    </appContext.Provider>
  )
}

export default AppContextProvider;         