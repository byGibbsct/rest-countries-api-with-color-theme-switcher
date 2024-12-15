"use client";

import Link from "next/link";

export default function BorderCountries({ countryBorders }) {

  return(
    <div className="country-info__border-countries">
      <h3 className="border-countires__heading">Border Countries:</h3>
      <ul className="border-countries__list">
        {
          countryBorders.map((country, i) => {
            const countrySimpleName = country.split(" ")[0];
            return(
              <li key={i}><Link href={`/details/${country}`}>{countrySimpleName}</Link></li>
            );
          })
        }
      </ul>
    </div>
  );
}