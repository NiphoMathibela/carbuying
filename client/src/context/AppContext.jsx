import React, { createContext, useState } from "react";
import axios from "axios";

export const appContext = createContext();

const AppContextProvider = (props) => {

  const [filterTags, setFilterTags] = useState([]);

  return (
        <appContext.Provider value={{filterTags, setFilterTags}}>
            {props.children}
        </appContext.Provider>
  )
}

export default AppContextProvider;