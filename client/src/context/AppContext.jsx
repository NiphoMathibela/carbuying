import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
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

  //LoggedIn Details
  const [loggedInName, setLoggedInName] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");

  //Logged in status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  //CurrentUser
  const [currentUser, setCurrentUser] = useState({});


//Signing out users
  const LogOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "http://localhost:5173/loginUser";
      setIsLoggedIn(false);
      // Handle successful logout logic (e.g., redirect to login page)
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error("Error logging out:", error);
    }
  }

  //Getting currently sighed in user
  
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
      menuIsOpen,
      setIsMenuOpen,
      filterOpen,
      setFilterOpen,
      ToggleMobileFilter,
      loggedInDetails,
      setLoggedInDetails,
      isLoggedIn,
      setIsLoggedIn,
      LogOut,
      currentUser,
      setCurrentUser,
      loggedInEmail,
      setLoggedInEmail
    }}>
      {props.children}
    </appContext.Provider>
  )
}

export default AppContextProvider;         