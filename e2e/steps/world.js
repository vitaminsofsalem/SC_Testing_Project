const { setWorldConstructor } = require("@cucumber/cucumber");
const { setDefaultTimeout } = require("cucumber");

setDefaultTimeout(20000);

class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
  }
}

setWorldConstructor(CustomWorld);
