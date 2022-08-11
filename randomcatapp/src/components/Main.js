import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [imgUrl, setImgUrl] = useState();
  const callImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setImgUrl(data[0].url));
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>hello prety cat</h2>
          <img src={imgUrl} alt="" />
          <button className="btn btn-primary" onClick={() => callImg()}>
            değiştir
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
