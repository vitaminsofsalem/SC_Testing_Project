import * as React from "react";
import { Item } from "../model/Item";
import "../Styles/Card.css";

const Card: React.FC<Item> = (props) => {
  return (
    <div
      onClick={() => {
        const url = props.url.includes("http")
          ? props.url
          : `https:${props.url}`;
        window.open(props.url, "_blank");
      }}
      className="cardItem"
    >
      {props.image ? (
        <img className="cardImage" src={props.image} />
      ) : (
        <p>No image found</p>
      )}
      <p className="cardTitle">{props.title}</p>
      <p className="cardPrice">
        {props.price.includes("$") || props.price === "Multiple prices"
          ? props.price
          : `${props.price} EGP`}
      </p>
    </div>
  );
};

export default Card;
