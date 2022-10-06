const getRequestCached = require("../../CachedRequests/getRequestCached");

/**
 * Sends a HTTP GET request to the Amazon webpages using axios
 * Function takes no parameters
 * @return Array of request promises for each page we're scraping ( 1 -> 4 )
 */
const requests = () => {
  const httpRequests = [];
  for (let i = 1; i <= 3; i++) {
    httpRequests.push(
      getRequestCached(
        `https://www.noon.com/egypt-en/search/?page=${i}&q=iphone`
      )
    );
  }
  return httpRequests;
};

module.exports = requests;
