/**
 * a class for managing scraped data
 */
class ScraperResults {
  /**
   * creates a new ScraperResults object
   * @param {Array?} existingData if exists, it is copied to the resultSet array
   */
  constructor(existingData) {
    if (existingData) this.resultSet = existingData.slice();
    else this.resultSet = [];
  }

  /**
   * pushes new data
   * @param {string} title name of the product
   * @param {string} price price of the product
   * @param {string} link link to the product page
   */
  push(title, price, link) {
    this.resultSet.push({ title, price, link });
  }

  /**
   * Takes the scraper results then filters them with the search query on the title
   * @param {string} searchQuery string that matches substring of the title of scraped data
   * @returns {ScraperResults} filtered scraper results
   */
  filterByTitle(searchQuery) {
    const q = new RegExp(`/${searchQuery}/`);
    console.log(q);
    return new ScraperResults(
      this.resultSet.filter((r) => q.test(r.title.toLowerCase()))
    );
  }
}
module.exports = ScraperResults;
