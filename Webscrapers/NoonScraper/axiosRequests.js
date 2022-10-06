const axios = require("axios");

/**
 * Sends a HTTP GET request to the Amazon webpages using axios
 * Function takes no parameters
 * @return Array of request promises for each page we're scraping ( 1 -> 4 )
 */
const axiosRequests = () => {
  const httpRequests = [];
  for (let i = 1; i <= 3; i++) {
    httpRequests.push(
      axios.get(`https://www.noon.com/egypt-en/search/?page=${i}&q=iphone`)
    );
  }
  return httpRequests;
};

module.exports = axiosRequests;
