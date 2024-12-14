"use client";

import { useRouter } from "next/navigation";

export default function Panel() {
  const router = useRouter();

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
          <img className="panel__country-flag" src="https://flagcdn.com/w320/be.png" alt="belgium flag" />
          <div className="panel__country-info">
            <h2 className="country-info__name">Belgium</h2>
            <div className="country-info__geography">
              <p><span>Native Name: </span>Belgie</p>
              <p><span>Population: </span>11,319,511</p>
              <p><span>Region: </span>Europe</p>
              <p><span>Sub Region: </span>Western Europe</p>
              <p><span>Capital: </span>Brussels</p>
            </div>
            <div className="country-info__misc">
              <p><span>Top Level Domain: </span>.be</p>
              <p><span>Currencies: </span></p>
              <p><span>Languages: </span>Dutch, French, German</p>
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