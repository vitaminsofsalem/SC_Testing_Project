const { MongoClient } = require("mongodb");
const bluebird = require("bluebird");

// package used to make all MongoClient promise based so we can handle callbacks easily using async / await
bluebird.promisifyAll(MongoClient);

const MONGO_URI =
  "mongodb+srv://sohila2001:sohila2001@cluster0.wvl0d.mongodb.net/Iphone?retryWrites=true&w=majority";
const MONGO_DB_NAME = "Scraped";
let dbConnection;

// connection initialization function
const connect = async () => {
  try {
    const client = await MongoClient.connect(MONGO_URI);
    dbConnection = client.db(MONGO_DB_NAME);
  } catch (e) {
    throw new Error(`Could not establish database connection: ${e}`);
  }
};

// exported function that connects to DB, returns collection we'll use to push to in scrape.js
const mongoClient = async (collectionName) => {
  if (!dbConnection) {
    await connect();
  }
  if (collectionName) {
    return dbConnection.collection(collectionName);
  }
  return dbConnection;
};

module.exports = {
  mongoClient,
};
