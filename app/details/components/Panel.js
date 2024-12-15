import { getCurrencies, getLanguages } from "@/app/utils";

import rawData from "@/app/data.json";

export default function Panel({ queryCountry }) {
  const [countryData] = rawData.filter(entry => entry.name == queryCountry);

  const currencies = getCurrencies(countryData);
  const languages = getLanguages(countryData);

  return (
    <article>
      <div className="panel">
        <div className="panel__back-btn">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
            <p>Back</p>
          </a>
        </div>
        <div className="panel__country">
          <img className="panel__country-flag" src={countryData.flags.svg} alt="belgium flag" />
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
            <div className="country-info__border-countries">
              <h3 className="border-countires__heading">Border Countries:</h3>
              <ul className="border-countries__list">
                <li><a href="/details/France">France</a></li>
                <li><a href="/details/Germany">Germany</a></li>
                <li><a href="/details/Netherlands">Netherlands</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}