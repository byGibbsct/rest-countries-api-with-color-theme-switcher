import CountryCard from "./CountryCard";

import data from "../data.json";


export default function Display() {

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