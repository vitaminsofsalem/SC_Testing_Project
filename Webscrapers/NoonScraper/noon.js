
import cheerio from "cheerio";
import express from "express";
import axios from "axios";
import iphone from "../../Database/models/iphone.schema.js";

//connect to DB
const connectToMongod = async () => {
  setTimeout(function () {
    mongoose.set("bufferCommands", false);
    mongoose
      .connect(
        "mongodb+srv://amro:amro1234@cluster0.z9mix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          socketTimeoutMS: 0,
        }
      )
      .then(() => {
        console.log("connected successfully");
      })
      .catch((err) => {
        console.error("Something is wrong"), err;
      });
  }, 0);

  console.log("connected to MongoDb");
};

const PORT = 3000;
const app = express();

const getNoon = async () => {

const data = [];

for(var i =0; i <=4; i++){
    const res = await axios( `https://www.noon.com/egypt-en/search/?page=${i}&q=iphone`);  //traverse through noon 4 webpages
    const html = res.data;
    const $ = cheerio.load(html); //load html in $

    $('.productContainer').each((i, el) => {  
        const title = $(el)  //find title of the mobile
        .find('span > span')
        .text()
            
        const price = $(el) //find price of each iphone
        .find('.currency')
        .end()
        .find('strong')
        .html()

        const link = 'https://www.noon.com' + $(el)  //find el link of this iphone
        .find('a')
        .attr('href')
        
        data.push({   ///object
            title,
            price,
            link,
          });

     });
     return data;
}
}

app.get("/noon", async (req, res) => {
  await connectToMongod();
  const data = await getNoon();
  await iphone.insertMany(data).catch((err) => {   //insert our array in the db
    console.error(err);
  });
  res.json(data);
});
  
  app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));