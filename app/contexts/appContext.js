"use client";

import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [ selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [ inputSearch, setInputSearch ] =  useState("");

  const stateValues = {
    selectedRegion,
    setSelectedRegion,
    inputSearch,
    setInputSearch,
  }

  return (
    <AppContext.Provider value={stateValues}>
      {children}
    </AppContext.Provider>
  );
};