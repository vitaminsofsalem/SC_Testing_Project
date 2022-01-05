process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const cheerio = require("cheerio");
const express = require("express");
const axios = require("axios");
const { mongoClient } = require("../../Database/db.js");
const PORT = 3000;
const app = express();

const alibabaScrapper = async () => {
  // arrays for saving requests & data
  const dataAggregate = [];
  const httpRequests = [];

  for (var i = 1; i <= 4; i++) {
    httpRequests.push(
      axios(
        `https://www.alibaba.com/trade/search?IndexArea=product_en&SearchText=iphone&page=${i}&f0=y`
        
      ).catch((err) => console.error(err))
    );
  }
  // allows us to parallel compute the requests ( 4s * 4 req's = 16s VS 4s total time)
  const results = await Promise.all(httpRequests);

  // give empty array to avoid error with forEach loop
  (results || []).forEach((httpResponse) => {
    const html = httpResponse.data;
    const $ = cheerio.load(html);

    $(".list-no-v2-main").each((i, el) => {
      
        const title = $(el)
          .find(".elements-title-normal__outter")
          .attr("title")
          

        const price = $(el)
          .find(".elements-offer-price-normal__price")
          .html();

        const link =
          $(el)
            .find("a")
            .attr("href");

        // push object to dataAggregate array
        dataAggregate.push({
          title,
          price,
          link,
        });
      
    });
  });

  return dataAggregate;
};

app.get("/alibabascraper", async (req, res) => {
  const data = await alibabaScrapper();

  // check truthy value of data and that it's not returned array isn't empty.
  if (data && data.length) {
    const db = await mongoClient("iphones");
    if (!db) {
      return res
        .status(500)
        .json({ message: "Unable to establish database connection" });
    }
    await db.insertMany(data).catch((err) => {
      console.error(err);
    });
  }
  res.json(data);
});

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
