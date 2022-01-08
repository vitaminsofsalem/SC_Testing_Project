process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");
const app = express();
const PORT = 3000;
const { mongoClient } = require("./Database/db.js");
const amazonScraper = require("./Webscrapers/AmazonScraper/amazon");
const noonScraper = require("./Webscrapers/NoonScraper/noon");
const alibabaScraper = require("./Webscrapers/AlibabaScrapper/alibaba");

app.get("/amazonscraper", async (req, res) => {
  try {
    const data = await amazonScraper();
    res.json(data);
  } catch (e) {
    res.status(500).send("sorry, an error has occured");
  }
});

app.get("/alibabascraper", async (req, res) => {
  try {
    const data = await alibabaScraper();
    const query = req.query.q;
    if (query) {
      res.json(
        data.filter((d) => d.title.toLowerCase().includes(query.toLowerCase()))
      );
      return;
    }
    res.json(data);
  } catch (e) {
    res.status(500).send("sorry, an error has occured");
  }
});

app.get("/noonscraper", async (req, res) => {
  try {
    const data = await noonScraper();
    res.json(data);
  } catch (e) {
    res.status(500).send("sorry, an error has occured");
  }
});

app.get("/all", async (req, res) => {});

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

module.exports = { app };

//////////////////////////////////////////
// Code to persist in DB ( copy paste into app.get('/all) )
//////////////////////////////////////////
// const amazonData = await amazonScraper();
// const noonData = await noonScraper();
// const alibabaData = await alibabaScraper();

// const dataAggregate = amazonData.concat(noonData, alibabaData);

// if (dataAggregate && dataAggregate.length) {
//   const db = await mongoClient("iphones");
//   if (!db) {
//     return res
//       .status(500)
//       .json({ message: "Unable to establish database connection" });
//   }
//   await db.insertMany(dataAggregate).catch((err) => {
//     console.error(err);
//   });
// }
// res.json(dataAggregate);
