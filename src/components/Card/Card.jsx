import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="cardimg" />
      <h2>{props.name}</h2>
      <div className="info">
        <h3>@0xcuygrfnhd</h3>
        <h4>0xjc7iwnyc7s92ns7x6s829xhsu27y</h4>
      </div>
    </div>
  );
};

export default Card;
