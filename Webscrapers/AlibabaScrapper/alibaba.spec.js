jest.mock("axios");

const mockAxios = require("axios");
const alibabaScraper = require("./alibaba");
const mockApiRes = require("./__mocks__/alibabaSuccess.api.stub");
const returnArrayMock = require("./__mocks__/alibabaReturn.api.stub");

// we will write 4 units tests.
// we'll mock axios and check in case of successful api return ( tests should pass )
// we'll test the return of amazonScraper to see if it returns an array of 64 objects
// we'll test the return of amazonScraper to see if it returns an the correct object format of test; price; link

mockAxios.get.mockImplementation(() => mockApiRes);

describe("Check tests using a successful api stub", () => {
  test("check that return array has 64 elements coming from the 4 scraped pages ( 16 elements each )", async () => {
    const data = await alibabaScraper();
    expect(data.length).toBe(returnArrayMock.length);
  });

  test("check that return array contains correct object structure against regular expression", async () => {
    const data = await alibabaScraper();
    for (let i = 0; i < data.length; i++) {
      expect(JSON.stringify(data[i])).toMatch(/title|price|link/gi);
    }
  });
});
