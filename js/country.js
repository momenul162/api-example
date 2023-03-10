const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
loadCountry();

const displayCountry = (countries) => {
  const allCountries = document.getElementById("countries");
  countries.forEach((country) => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h1>Country: ${country.name.common}</h1>
    <h4>Capital: ${country.capital ? country.capital[0] : "No capital"}</h4>
    <p>Continents: ${country.continents ? country.continents[0] : "No continents"}</p>
    <button onclick="countryDetails('${country.cca2}')">Details</button>
    `;
    allCountries.appendChild(countryDiv);
  });
};

const countryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};

const displayDetails = (detaile) => {
  console.log(detaile);
  const displayCountryDetails = document.getElementById("country-details");
  displayCountryDetails.innerHTML = `
  <h1>Population: ${detaile.name.common}</h1>
  <h3>Population: ${detaile.population}</h3>
  <img src ="${detaile.flags.png}" alt="">
  `;
};
