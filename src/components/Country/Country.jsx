import React, { useState } from "react";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    // first system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // 2nd system
    // setVisited(visited ? false : true);
    // third system
    setVisited(!visited);
  };
  return (
    <div
      className={`border-2 border-red-400 p-10 rounded-lg ${
        visited && `bg-amber-100 text-black`
      }`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>
        Country:{country.name.common} official:{country.name.official}
      </h2>
      <h4>Continents: {country.continents.continents[0]}</h4>
      <h2>Capital:{country.capital.capital[0]}</h2>
      <p>Population:{country.population.population}</p>
      <p>
        Area:{country.area.area}
        {country.area.area < 300000 ? "small country" : "big country"}
      </p>
      <button onClick={handleVisit} className="btn">
        {visited ? `Visited` : `Not Visited`}
      </button>
    </div>
  );
};

export default Country;
