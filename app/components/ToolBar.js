"use client";

import { useState, useContext } from "react";
import { AppContext } from "../contexts/appContext";

export default function ToolBar() {
  const [ isHidden, setIsHidden ] = useState(true);
  const { selectedRegion, setSelectedRegion, inputSearch, setInputSearch } = useContext(AppContext); 

  function updateRegion(event) {
    setSelectedRegion(pv => {
      if(pv == event.target.innerText) {
        return "Filter by Region";
      } else {
        return event.target.innerText
      }
    });
    setIsHidden(pv => !pv)
  }

  function updateInput(event) {
    setInputSearch(() => event.target.value);
  }

  return (
    <div className="toolbar">
      <div className="toolbar__search">
        <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input className="search__input" type="text" value={inputSearch} onChange={updateInput} placeholder="Search for a country..." />
      </div>
      <div className="filter">
        <div className="filter__region-selector" onClick={() => setIsHidden(pv => !pv)}>
          <p className="region-selector__text">{selectedRegion}</p>
          <svg className="region-selector__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
        <div className={`filter__region-options ${isHidden && "hidden"}`}>
          <ul className="region-options__list">
            <li onClick={(e) => updateRegion(e)}>Africa</li>
            <li onClick={(e) => updateRegion(e)}>Americas</li>
            <li onClick={(e) => updateRegion(e)}>Asia</li>
            <li onClick={(e) => updateRegion(e)}>Europe</li>
            <li onClick={(e) => updateRegion(e)}>Oceania</li>
          </ul>
        </div>
      </div>
    </div>
  );
}