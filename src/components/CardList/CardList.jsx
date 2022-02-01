import React from "react";
import "./CardList.css";

import Card from "../Card/Card";

import shrooms from "../../assets/shrooms.jpg";
import cats from "../../assets/cats.jpg";
import dogs from "../../assets/dogs.jpg";
import coffee from "../../assets/coffee.jpg";
import gaming from "../../assets/gaming.png";
import deer from "../../assets/deer.png";

const CardList = () => {
  return (
    <div className="cardlist">
      <Card name="Shroom Room" img={shrooms} />
      <Card name="Cats" img={cats} />
      <Card name="Dog House" img={dogs} />
      <Card name="Coffee House" img={coffee} />
      <Card name="Game Room" img={gaming} />
      <Card name="Zoo" img={deer} />
    </div>
  );
};

export default CardList;
