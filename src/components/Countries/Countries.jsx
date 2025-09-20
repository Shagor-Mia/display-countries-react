import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ allCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const countriesData = use(allCountries);
  const countries = countriesData.countries;

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    const newFlags = [...visitedFlags, flags];
    setVisitedFlags(newFlags);
  };

  return (
    <>
      <h2>Countries length:{countries.length}</h2>
      <div>
        <h1 className="py-10 text-center">
          visited country:{visitedCountries.length}
        </h1>

        <ol className="py-10">
          {visitedCountries.map((country) => (
            <li key={country.ccn3.ccn3}>{country.name.common}</li>
          ))}
        </ol>
        <div className="">
          <h3>Total flags:{visitedFlags.length}</h3>
          <div className="flex w-10 gap-5">
            {visitedFlags.map((flag, index) => (
              <img className="text-center" key={index} src={flag} alt="" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {countries.map((country) => (
            <Country
              key={country.ccn3.ccn3}
              country={country}
              handleVisitedFlags={handleVisitedFlags}
              handleVisitedCountries={handleVisitedCountries}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
