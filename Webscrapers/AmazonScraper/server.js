process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const cheerio = require("cheerio");
const express = require("express");
const axios = require("axios");
const { mongoClient } = require("../../Database/db.js");
const PORT = 3000;
const app = express();

const iLoveFakhry = async () => {
  // arrays for saving requests & data
  const dataAggregate = [];
  const httpRequests = [];

  for (var i = 1; i <= 4; i++) {
    httpRequests.push(
      axios(
        `https://www.amazon.com/s?k=iphone&page=${i}&qid=1641303333&sprefix=iphone%2Caps%2C262&ref=sr_pg_${i}`
      ).catch((err) => console.error(err))
    );
  }
  // allows us to parallel compute the requests ( 4s * 4 req's = 16s VS 4s total time)
  const results = await Promise.all(httpRequests);

  // give empty array to avoid error with forEach loop
  (results || []).forEach((httpResponse) => {
    const html = httpResponse.data;
    const $ = cheerio.load(html);

    $(".s-asin").each((i, el) => {
      if (i == 16) {
        return false;
      } else {
        const title = $(el)
          .find(".s-title-instructions-style")
          .end()
          .find(".a-size-medium.a-color-base.a-text-normal")
          .html();

        const price = $(el)
          .find(".s-price-instructions-style")
          .end()
          .find(".a-offscreen")
          .html();

        const link =
          "https://amazon.com" +
          $(el)
            .find(".s-title-instructions-style")
            .end()
            .find(".a-link-normal")
            .attr("href");

        // push object to dataAggregate array
        dataAggregate.push({
          title,
          price,
          link,
        });
      }
    });
  });

  return dataAggregate;
};

app.get("/amazonscraper", async (req, res) => {
  const data = await iLoveFakhry();

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
