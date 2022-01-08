jest.mock("axios");

const mockAxios = require("axios");
const alibabaScraper = require("./alibaba");
const mockApiRes = require("./__mocks__/alibabaSuccess.api.stub");
const mockApiResEmpty = require("./__mocks__/alibabaEmpty.api.stub");
const returnArrayMock = require("./__mocks__/alibabaReturn.api.stub");

// 2 tests
// One for parsing html correctly and returning the full list
// One for parsing html with no elemtns, and returning emtpy list

//Axios mocked once, same response for all 4 times requeust is called
//Success mock contains each item 4 times

describe("Check that scraping of the html document is done correctly", () => {
  test("parses html document and returns all products in an array", async () => {
    mockAxios.get.mockImplementation(() => mockApiRes);
    const data = await alibabaScraper();
    expect(data).toEqual(returnArrayMock);
  });

  test("parses html document and returns an empty array if no elements are found", async () => {
    mockAxios.get.mockImplementation(() => mockApiResEmpty);
    const data = await alibabaScraper();
    expect(data).toEqual([]);
  });
});
