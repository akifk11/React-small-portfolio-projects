import React from "react";
import "./Acordion.css";

const Acordion = ({ title, show, setShow }) => {
    return <div className="acordion-container">
        <div className="acordion-header">
            <h3>{title}</h3>
            <button onClick={() => setShow(title)}>click me</button>
        </div>
        <div className={(show === title ? "show" : "") + "acordion-body"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repellendus voluptatibus ullam placeat quia accusantium harum debitis cupiditate culpa eaque aut, molestiae eveniet possimus id aperiam in suscipit veritatis vitae!
            </p>
        </div>
    </div>;
};

export default Acordion;
