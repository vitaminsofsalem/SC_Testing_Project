const axios = require("axios");
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given("A request", function () {
  //Nothing here, no inputs needed. Any request to endpoint does the job
});

When("I send a GET request to {string}", async function (endpoint) {
  this.context["response"] = await axios.get(
    `http://localhost:3000${endpoint}`
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
    assert(item.price === null || typeof item.price === "string");
    assert.equal(typeof item.link, "string");
  }
});

When(
  "I send a GET request to {string} with search query {string}",
  async function (endpoint, query) {
    this.context["query"] = query;
    this.context["response"] = await axios.get(
      `http://localhost:3000${endpoint}?q=${query}`
    );
  }
);
Then("I get results match with the query", function () {
  const query = this.context["query"].toLowerCase();
  const data = this.context["response"].data;
  data.forEach((d) =>
    assert.equal(d.title.toLowerCase().includes(query), true)
  );
});
