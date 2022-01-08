const cheerio = require("cheerio");
const axios = require("axios");
const ScraperResults = require("../ScraperResults");
const axiosRequests = require("./axiosRequests");

/**
 * Scrapes Alibaba Websites then returns the scraping results
 * @returns {ScraperResults} scraped data
 */
const alibabaScrapper = async () => {
  // arrays for saving requests & data
  const dataAggregate = new ScraperResults();
  const httpRequests = axiosRequests();

  // allows us to parallel compute the requests ( 4s * 4 req's = 16s VS 4s total time)
  const results = await Promise.all(httpRequests);

  // give empty array to avoid error with forEach loop
  results.forEach((httpResponse) => {
    const html = httpResponse.data;
    const $ = cheerio.load(html);

    $(".list-no-v2-main").each((i, el) => {
      const title = $(el).find(".elements-title-normal__outter").attr("title");

      const price = $(el).find(".elements-offer-price-normal__price").text();

      const link = $(el).find("a").attr("href");

      // push object to dataAggregate
      dataAggregate.push(title, price, link);
    });
  });

  return dataAggregate;
};

module.exports = alibabaScrapper;
