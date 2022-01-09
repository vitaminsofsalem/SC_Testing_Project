const fs = require("fs");
const { createHash } = require("crypto");

const axios = require("axios");
const CACHE_LIFETIME_SECONDS = 3600;
const CACHE_DIR = `${__dirname}/caches`;

/**
 * forms the path for the cached file
 * @param {string} dir directory where the cached files are stored (written without the last slash)
 * @param {string} URL which will be encoded to base64 in the filename
 * @returns {string} path
 */
const cachedFilePath = (dir, file) => `${dir}/${file}.cache`;

/**
 * Makes an http request to the content then persists the response as offline file
 * @param {string} URL whose response will be cached
 * @param {int} lifetimeMS lifetime of the cache in milliseconds (before it becomes stale)
 * @param {string} cachePath path where the cached data are stored
 * @returns {any} reponse that has been recently cached
 */
const cacheResponse = async (url, lifetimeMS, cachePath) => {
  try {
    const { status, data } = await axios(url);
    const res = { status, data };

    const toBeStored = {
      data: Buffer.from(JSON.stringify(res)).toString("base64"), //encode data as base64 then store it
      timestampMS: Date.now().toString(16), //store timestamp in unix format (seconds since 1970) (the time when the page was fetched)
      lifetimeMS: lifetimeMS.toString(16), //store lifetime value
      //both timestamp and lifetime are in milliseconds and encoded in base 16
    };

    await fs.promises.writeFile(cachePath, JSON.stringify(toBeStored));
    return res;
  } catch (e) {
    if (e.response) return { status: e.response.status, data: e.response.data };
    return {};
  }
};

/**
 * Checks if cached data is stale (too old) depending on its lifetime
 * @param {CachedObject} cacheObj the cached object
 */
const checkIfStale = (cacheObj) => {
  const currentTimeMS = Date.now();
  const lifetimeMS = parseInt(cacheObj.lifetimeMS, 16);
  const timestampMS = parseInt(cacheObj.timestampMS, 16);

  return timestampMS + lifetimeMS < currentTimeMS;
};

/**
 * get the content of cached http request, if the cache (offline data) doesn't exist or stale (too old), then an http request will be made.
 * @param {string} url URL to retrieve
 * @returns {any} cached content
 */
const getRequestCached = async (url) => {
  const hasher = createHash("sha256");
  hasher.update(url);
  const hashedURL = hasher.digest("hex"); //hash the URL and make it the filename
  const filePath = cachedFilePath(CACHE_DIR, hashedURL);

  try {
    await fs.promises.access(filePath, fs.constants.F_OK); //check if file exists
    const cacheObj = JSON.parse(await fs.promises.readFile(filePath));
    if (checkIfStale(cacheObj)) {
      const res = cacheResponse(url, CACHE_LIFETIME_SECONDS * 1000, filePath);
      return res;
    }
    const res = JSON.parse(Buffer.from(cacheObj.data, "base64").toString());
    return res;
  } catch (e) {
    const res = cacheResponse(url, CACHE_LIFETIME_SECONDS * 1000, filePath);
    return res;
  }
};

module.exports = getRequestCached;
