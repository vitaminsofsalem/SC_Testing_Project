import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { Item } from "../model/Item";
import { ImageGetter } from "../util/ImageGetter";

const AmazonPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/amazonscraper").then((value) => {
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
        items.map((value) => {
          return <Card key={value.url} {...value} />;
        })
      ) : (
        <p>Scrapping amazon.com</p>
      )}
    </div>
  );
};

export default AmazonPage;
