process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");
const app = express();
const PORT = 3000;
const { mongoClient } = require("./Database/db");
const amazonScraper = require("./Webscrapers/AmazonScraper/amazon");
const noonScraper = require("./Webscrapers/NoonScraper/noon");
const alibabaScraper = require("./Webscrapers/AlibabaScrapper/alibaba");
const ScraperResults = require("./Webscrapers/ScraperResults");

app.get("/amazonscraper", async (req, res) => {
  const data = await amazonScraper();
  res.json(data.resultSet);
});

app.get("/alibabascraper", async (req, res) => {
  const query = req.query.q;
  const data = await alibabaScraper();

  if (query) res.json(data.filterByTitle(query).resultSet);
  else res.json(data.resultSet);
});

app.get("/noonscraper", async (req, res) => {
  const data = await noonScraper();
  res.json(data.resultSet);
});

app.get("/all", async (req, res) => {});

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

module.exports = { app };

//////////////////////////////////////////
// Code to add to DB
//////////////////////////////////////////
//  if (data && data.length) {
//    const db = await mongoClient("iphones");
//    if (!db) {
//      return res
//        .status(500)
//        .json({ message: "Unable to establish database connection" });
//    }
//    await db.insertMany(data).catch((err) => {
//      console.error(err);
//    });
//  }
