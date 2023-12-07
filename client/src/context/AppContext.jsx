import React, { createContext } from "react";
import axios from "axios";

export const appContext = createContext();

const AppContextProvider = (props) => {

    const client = axios.create({baseURL: "https://localhost:7069/api/Cars"});

  return (
        <appContext.Provider value={{}}>
            {props.children}
        </appContext.Provider>
  )
}

export default AppContextProvider;