import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const allCountries = fetch("https://openapi.programming-hero.com/api/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <h1 className="text-red-300">react js</h1>
      <Suspense fallback={<h2>Countries Loading...</h2>}>
        <Countries allCountries={allCountries} />
      </Suspense>
    </>
  );
}

export default App;
