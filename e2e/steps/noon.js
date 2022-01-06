const axios = require("axios");
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given("A request", function () {
  //Nothing here, no inputs needed. Any request to endpoint does the job
});

When("I send a GET request to \\/noonscraper", async function () {
  this.context["response"] = await axios.get(
    "http://localhost:3000/noonscraper"
  );
});

Then("I get response code {int} and valid array of items", function (code) {
  const response = this.context["response"];
  const data = response.data;
  assert.equal(response.status, 200);
  assert(Array.isArray(data));
  assert(data.length >= 1);
  for (const item of data) {
    assert.equal(typeof item.title, "string");
    assert.equal(typeof item.price, "string");
    assert.equal(typeof item.link, "string");
  }
});
