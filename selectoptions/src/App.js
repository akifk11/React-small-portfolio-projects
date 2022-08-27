import React, { useState } from "react"
import './App.css';
import Data from "./Data.json"

function App() {
  const [ulke, setUlke] = useState()

  let countries = Data.map((country) => country.country_name)

  const handleCountry = (e) => {
    setUlke(e.target.value)
  }

  return (
    <div className="App">
      <select name="country" id="" onChange={(e) => handleCountry(e)}>

        <option value="">please, select a country</option>
        {countries.map((country, index) => (
          <option value={country} key={index}>{country}</option>
        ))}
      </select>
      <h1>{ulke}</h1>
    </div>
  );
}

export default App;
