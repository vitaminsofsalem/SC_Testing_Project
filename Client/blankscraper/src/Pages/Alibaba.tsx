import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Item } from "../model/Item";
import { ImageGetter } from "../util/ImageGetter";

const AlibabaPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/alibabascraper").then((value) => {
      const items = (value.data as any[]).map((value): Item => {
        return {
          price: value.price || "Multiple prices",
          title: value.title,
          url: value.link,
          image: ImageGetter.getImage(value.title),
        };
      });
      setItems(items);
    });
  }, []);
  return (
    <div className="list">
      {items.length ? (
        items.map((value, index) => {
          return <Card key={value.url + index} {...value} />;
        })
      ) : (
        <p data-testid="loading-text">Scrapping alibaba.com</p>
      )}
    </div>
  );
};

export default AlibabaPage;
