import rawData from "@/app/data.json";

import Link from "next/link";
import BorderCountries from "./BorderCountries";
import { getCurrencies, getLanguages } from "@/app/utils";

export default function Panel({ queryCountry }) {
  const [ countryData ] = rawData.filter(entry => entry.name == queryCountry);

  const currencies = getCurrencies(countryData);
  const languages = getLanguages(countryData);

  const alphaCodesList = [];
  countryData.borders?.forEach((countryCode) => {
    const [countryMatch] = rawData.filter(entry => entry.alpha3Code == countryCode);
    alphaCodesList.push(countryMatch.name);
  });
  
  return (
    <article>
      <div className="panel">
        <div className="panel__back-btn">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
            <p>Back</p>
          </Link>
        </div>
        <div className="panel__country">
          <img className="panel__country-flag" src={countryData.flags.svg} alt={`${countryData.name} flag`} />
          <div className="panel__country-info">
            <h2 className="country-info__name">{countryData.name}</h2>
            <div className="country-info__geography">
              <p><span>Native Name: </span>{countryData.nativeName}</p>
              <p><span>Population: </span>{countryData.population}</p>
              <p><span>Region: </span>{countryData.region}</p>
              <p><span>Sub Region: </span>{countryData.subRegion}</p>
              <p><span>Capital: </span>{countryData.capital}</p>
            </div>
            <div className="country-info__misc">
              <p><span>Top Level Domain: </span>{countryData.topLevelDomain}</p>
              <p><span>Currencies: </span>{currencies}</p>
              <p><span>Languages: </span>{languages}</p>
            </div>
            <BorderCountries
              countryBorders={alphaCodesList}
            />
          </div>
        </div>
      </div>
    </article>
  );
}