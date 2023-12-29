import React, { createContext } from "react";
import axios from "axios";

export const appContext = createContext();

const AppContextProvider = (props) => {

  

  return (
        <appContext.Provider value={{}}>
            {props.children}
        </appContext.Provider>
  )
}

export default AppContextProvider;