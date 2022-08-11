import React, { useState } from "react";
import "./App.css";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randVal, setRandVal] = useState(5);
  const randomGetValue = () => {
    setRandVal(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    console.log(minVal, maxVal);
    console.log(randVal);
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="random-num-box">
          <h4>random number:</h4>
          <h4>{randVal}</h4>
        </div>
        <div className="number-min-max-box">
          <div className="min">
            <h4>min:</h4>
            <input
              value={minVal}
              onChange={(e) => setMinVal(+e.target.value)}
              type="text"
            />
          </div>
          <div className="max">
            <h4>max:</h4>
            <input
              value={maxVal}
              onChange={(e) => setMaxVal(+e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className="button">
          <button onClick={randomGetValue}>random number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
