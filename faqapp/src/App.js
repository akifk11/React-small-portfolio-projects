import React, { useState } from 'react';
import './App.css';
import Acordion from './Acordion';

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Acordion title="baslık-1" show={show} setShow={setShow} />
      <Acordion title="baslık-2" show={show} setShow={setShow} />
      <Acordion title="baslık-3" show={show} setShow={setShow} />
      <Acordion title="baslık-4" show={show} setShow={setShow} />
      <Acordion title="baslık-5" show={show} setShow={setShow} />
    </div>
  );
}

export default App;
