const cheerio = require("cheerio");
const axios = require("axios");

const noonScraper = async () => {
  // arrays for saving requests & data
  const dataAggregate = [];
  const httpRequests = [];

  for (let i = 1; i <= 4; i++) {
    //loop around first 4 pages of search result
    httpRequests.push(
      axios(`https://www.noon.com/egypt-en/search/?page=${i}&q=iphone`).catch(
        (err) => console.error(err)
      )
    );
  }

  const results = await Promise.all(httpRequests); //parallel compute the requests

  (results || []).forEach((httpResponse) => {
    // give empty array to avoid error with forEach loop
    const html = httpResponse.data;
    const $ = cheerio.load(html);

    $(".productContainer").each((i, el) => {
      // Find title of the mobile
      const title = $(el).find("span > span").text();

      // Find price of each iphone
      const price = $(el).find(".currency").end().find("strong").html();

      // Find el link of this iphone
      const link = "https://www.noon.com" + $(el).find("a").attr("href");

      // Pushing object to dataAggregate array
      dataAggregate.push({
        title,
        price,
        link,
      });
    });
  });
  return dataAggregate;
};

module.exports = noonScraper;
