const fetch = require('node-fetch');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');

// Replace these values with your own Twitter API credentials
const consumerKey = "At1uvLhONPOrJL4uuv8qpDyvJ";
const consumerSecret = "C0G5mXRIllQ21P0IGsviDnbnNMVnhAPNfCGbohEVxFqUhStUGR";
const accessToken = "1377339725095264260-hb2iwqbAvw4fvqaPfqxpro6Dv4BudK";
const accessTokenSecret = "EbWWVWDqhnNPD7z1M8GuvbBzqYvhQT2pJNctYHdfwtS7W";

// Set up OAuth 1.0a
const oauth = OAuth({
  consumer: { key: consumerKey, secret: consumerSecret },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

// Define the text of your tweet
const tweetText = "Hello, world! This is my first tweet using the Twitter API.";

// Set up the request data
const requestData = {
  url: 'https://api.twitter.com/1.1/statuses/update.json',
  method: 'POST',
  data: { status: tweetText }
};

// Generate the OAuth headers
const headers = oauth.toHeader(oauth.authorize(requestData, { key: accessToken, secret: accessTokenSecret }));

// Send the POST request to the Twitter API
fetch(requestData.url, {
  method: requestData.method,
  headers: {
    ...headers,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(requestData.data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
