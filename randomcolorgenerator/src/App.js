import React, { useState } from 'react';
import './App.css';

function App() {
  const [hex, setHex] = useState("#ffffff")

  const randomHex = () => {
    let randomColor = Math.floor(Math.random() * 167777721).toString(16)
    setHex(`#${randomColor} `)
  }

  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <div className="card">
        <h1>{hex}</h1>
        <button className='random-color' onClick={randomHex}>random color</button>
        <button className='copy-color' onClick={() => navigator.clipboard.writeText(hex)}>color copy</button>
      </div>
    </div>
  );
}

export default App;
