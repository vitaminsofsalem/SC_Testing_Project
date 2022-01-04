import cheerio from "cheerio";
import express from "express";
import axios from "axios";
import mongoose from "mongoose";
import iphone from "../../Database/models/iphone.schema.js";
const PORT = 3000;
const app = express();

const connectToMongod = async () => {
  await mongoose.connect(
    "mongodb+srv://sohila2001:sohila2001@cluster0.wvl0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      socketTimeoutMS: 0,
    }
  );
  console.log("connected to MongoDb");
};

const iLoveFakhry = async () => {
  const data = [];

  for (var i = 1; i <= 4; i++) {
    const res = await axios(
      `https://www.amazon.com/s?k=iphone&page=${i}&qid=1641303333&sprefix=iphone%2Caps%2C262&ref=sr_pg_${i}`
    );

    const html = res.data;
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

        data.push({
          title,
          price,
          link,
        });
        iphone.create({
          title,
          price,
          link,
        });
      }
    });
  }

  return data;
};

app.get("/scrape", async (req, res) => {
  await connectToMongod();
  const data = await iLoveFakhry();
  res.send(data);
});

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
