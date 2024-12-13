
export default function CountryCard() {
  return (
    <article className="card">
      <img src="https://flagcdn.com/w320/de.png" alt="germany flag"/>
      <div className="card__country-details">
        <h2 className="card__country-name">Germany</h2>
        <div className="card__country-info">
          <p className="country-info__data"><span>Population:</span> 81,770,90</p>
          <p className="country-info__data"><span>Region:</span> Europe</p>
          <p className="country-info__data"><span>Capital:</span> Berlin</p>
        </div>
      </div>
    </article>
  );
}