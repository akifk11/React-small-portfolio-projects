import React, { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

  const [randomName, setRandomName] = useState()
  const [randomImage, setRandomImage] = useState()
  const [randomCell, setRandomCell] = useState()
  const [randomEmail, setRandomEmail] = useState()

  const ProfileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api")
      console.log(res)
      setRandomCell(res.data.results[0].cell)
      setRandomEmail(res.data.results[0].email)
      setRandomImage(res.data.results[0].picture.large);
      setRandomName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">
      <div>
        <img src={randomImage} alt="" />
        <h3>{randomCell}</h3>
        <h3>{randomName}</h3>
        <h4>{randomEmail}</h4>
        <button onClick={ProfileData}>random get profile</button>
      </div>

    </div>
  );
}

export default App;
