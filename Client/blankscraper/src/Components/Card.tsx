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
        window.open(url, "_blank");
      }}
      className="cardItem"
      data-testid="card"
    >
      {props.image ? (
        <img data-testid="image" className="cardImage" src={props.image} />
      ) : (
        <p data-testid="no-image-p">No image found</p>
      )}
      <p data-testid="title" className="cardTitle">
        {props.title}
      </p>
      <p data-testid="price" className="cardPrice">
        {props.price.includes("$") || props.price === "Multiple prices"
          ? props.price
          : `${props.price} EGP`}
      </p>
    </div>
  );
};

export default Card;
