import React, { useState } from "react";
import Images from "./Images";
import "./App.css";

function App() {
  const [img, setImg] = useState(Images[0]);
  return (
    <div className="container">
      <div className="img-container">
        <div className="main-image">
          <img src={img} alt="" />
        </div>
        <div className="select-image">
          {Images.map((image, index) => (
            <img
              className="selecte-image"
              src={image}
              key={index}
              alt=""
              onClick={() => setImg(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
