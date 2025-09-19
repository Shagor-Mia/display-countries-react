import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ allCountries }) => {
  const countriesData = use(allCountries);
  const countries = countriesData.countries;
  return (
    <>
      <h2>Countries length:{countries.length}</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
