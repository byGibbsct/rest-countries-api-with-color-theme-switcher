"use client";

export default function BorderCountries({ countryBorders }) {

  return(
    <div className="country-info__border-countries">
      <h3 className="border-countires__heading">Border Countries:</h3>
      <ul className="border-countries__list">
        {
          countryBorders.map((country, i) => {
            return(
              <li key={i}><a href={`/details/${country}`}>{country}</a></li>
            );
          })
        }
      </ul>
    </div>
  );
}