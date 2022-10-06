const getRequestCached = require("../../CachedRequests/getRequestCached");

/**
 * Sends a HTTP GET request to the Amazon webpages using axios
 * Function takes no parameters
 * @return Array of request promises for each page we're scraping ( 1 -> 4 )
 */
const requests = () => {
  const httpRequests = [];
  for (let i = 1; i <= 4; i++) {
    httpRequests.push(
      getRequestCached(
        `https://www.alibaba.com/trade/search?IndexArea=product_en&SearchText=iphone&page=${i}&f0=y`
      )
    );
  }
  return httpRequests;
};

module.exports = requests;
