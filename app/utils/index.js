export function getCurrencies(countryData) {
  let currenciesArray = [];
  countryData.currencies.forEach(newCurrency => currenciesArray.push(newCurrency.name));
  return currenciesArray.join(", ");
}

export function getLanguages(countryData) {
  let langArray = [];
  countryData.languages.forEach(newLang => langArray.push(newLang.name));
  return langArray.join(", ");
}