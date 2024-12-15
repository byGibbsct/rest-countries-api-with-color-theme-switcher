"use client";

import rawData from "../data.json";

import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/appContext";

import CountryCard from "./CountryCard";

export default function Display() {
  const { selectedRegion, setSelectedRegion, inputSearch } = useContext(AppContext);
  const [ data, setData ] = useState([]);

  useEffect(() => {
    setData(() => selectedRegion == "Filter by Region" ? rawData : rawData.filter((entry) => entry.region == selectedRegion));
    setData(pv => inputSearch == "" ? pv : pv.filter(entry => entry.name.toLowerCase().includes(inputSearch.toLowerCase())));
  }, [selectedRegion, inputSearch]);

  return (
    <div className="display">
      {
        data.map((country, i) => {
          return (
            <CountryCard
              key={i}
              name={country.name}
              flagUrl={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })
      }
    </div>
  );
}