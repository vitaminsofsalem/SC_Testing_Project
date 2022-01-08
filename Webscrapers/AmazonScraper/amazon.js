const cheerio = require("cheerio");
const { axiosRequests } = require("./axiosRequests");

/*
 * Scrape iphone data from Amazon with a depth of 4 pages for scraping.
 * function doesn't take any params
 * @return  title, price, link of listed iphones
 */
const amazonScraper = async () => {
  // Arrays for saving requests & data
  const httpRequests = axiosRequests();
  const dataAggregate = [];

  // Allows us to resolve all promises and run them in the order they were received in ( 1 -> 4 ) and in parallel.
  const results = await Promise.all(httpRequests);

  // Loop over request array getting the html document stored in .data and loading it with cheerio to being scraping webpages.
  results.forEach((httpResponse) => {
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

        // Push scraped data to dataAggregate array as an object
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

module.exports = amazonScraper;
