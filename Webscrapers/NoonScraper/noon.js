const cheerio = require("cheerio");
const axios = require("axios");
const axiosRequests = require("./axiosRequests");

/**
 * Scrape iphone data from Noon with a depth of 4 pages for scraping.
 * function doesn't take any params
 * @return  title, price, link of listed iphones
 */
const noonScraper = async () => {
  // Arrays for saving requests & data
  const dataAggregate = [];
  const httpRequests = axiosRequests();

  // Allows us to resolve all promises and run them in the order they were received in ( 1 -> 4 ) and in parallel.
  const results = await Promise.all(httpRequests);

  results.forEach((httpResponse) => {
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
