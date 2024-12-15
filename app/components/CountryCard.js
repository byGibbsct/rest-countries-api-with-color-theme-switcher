import Link from "next/link";

export default function CountryCard(props) {
  return (
    <article className="card">
      <Link href={`/details/${props.name}`}>
        <img className="card__flag" src={props.flagUrl} alt={`${props.name} flag`}/>
        <div className="card__country-details">
          <h2 className="card__country-name">{props.name}</h2>
          <div className="card__country-info">
            <p className="country-info__data"><span>Population:</span> {props.population}</p>
            <p className="country-info__data"><span>Region:</span> {props.region}</p>
            <p className="country-info__data"><span>Capital:</span> {props.capital}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}