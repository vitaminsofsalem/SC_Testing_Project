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
        `https://www.amazon.com/s?k=iphone&page=${i}&qid=1641303333&sprefix=iphone%2Caps%2C262&ref=sr_pg_${i}`
      )
    );
  }
  return httpRequests;
};

module.exports = requests;
