import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="text-container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
