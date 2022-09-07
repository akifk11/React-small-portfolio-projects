import React, { useState } from "react";
import './App.css';
import 'animate.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [handleTime, setHandleTime] = useState(time);

  const Time = () => {
    let time = new Date().toLocaleTimeString();
    setHandleTime(time)
  }
  setInterval(Time, 100)

  return (
    <div className="App">
      <h1 class="animate__animated animate__bounce">{handleTime}</h1>
    </div>
  );
}

export default App;
