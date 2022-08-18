import React, { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState(11)
  const [color, setColor] = useState("blue")

  const increase = () => {
    setTemp(temp + 1)
    if (temp > 15) {
      setColor("red")
    }
  }
  const decrease = () => {

    setTemp(temp - 1)

    if (temp <= 15) {
      setColor("blue")
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className={`${color}  ${"temp"}`}>
            <h1 >{temp}</h1>
          </div>
          <div className="buttons">
            <div><button onClick={() => increase()}>-</button></div>
            <div><button onClick={() => decrease()}>+</button></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
