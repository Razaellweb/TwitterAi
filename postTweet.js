import got from "got";
import crypto from "crypto";
import OAuth from "oauth-1.0a";
import qs from "querystring";
import { createInterface } from "readline";
import dotenv from "dotenv";


dotenv.config();

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = process.env.consumer_key;
const consumer_secret = process.env.consumer_secret;

// Be sure to add replace the text of the with the text you wish to Tweet.
// You can also add parameters to post polls, quote Tweets, Tweet with reply settings, and Tweet to Super Followers in addition to other features.

const endpointURL = `https://api.twitter.com/2/tweets`;

// this example uses PIN-based OAuth to authorize the user
const requestTokenURL =
  "https://api.twitter.com/oauth/request_token?oauth_callback=oob&x_auth_access_type=write";
const authorizeURL = new URL("https://api.twitter.com/oauth/authorize");
const accessTokenURL = "https://api.twitter.com/oauth/access_token";
const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret,
  },
  signature_method: "HMAC-SHA1",
  hash_function: (baseString, key) =>
    crypto.createHmac("sha1", key).update(baseString).digest("base64"),
});

async function input(prompt) {
  return new Promise(async (resolve, reject) => {
    readline.question(prompt, (out) => {
      readline.close();
      resolve(out);
    });
  });
}

async function requestToken() {
  const authHeader = oauth.toHeader(
    oauth.authorize({
      url: requestTokenURL,
      method: "POST",
    })
  );

  const req = await got.post(requestTokenURL, {
    headers: {
      Authorization: authHeader["Authorization"],
    },
  });
  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error("Cannot get an OAuth request token");
  }
}

async function accessToken({ oauth_token, oauth_token_secret }, verifier) {
  const authHeader = oauth.toHeader(
    oauth.authorize({
      url: accessTokenURL,
      method: "POST",
    })
  );
  const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`;
  const req = await got.post(path, {
    headers: {
      Authorization: authHeader["Authorization"],
    },
  });
  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error("Cannot get an OAuth request token");
  }
}

async function getRequest(tweet) {
  const token = {
    key: process.env.access_token,
    secret: process.env.access_token_secret,
  };

  const data = {
    text: tweet,
  };

  console.log(data.text)

  const authHeader = oauth.toHeader(
    oauth.authorize(
      {
        url: endpointURL,
        method: "POST",
      },
      token
    )
  );

  const req = await got.post(endpointURL, {
    json: data,
    responseType: "json",
    headers: {
      Authorization: authHeader["Authorization"],
      "user-agent": "v2CreateTweetJS",
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  if (req.body) {
    return req.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}

const func = async () => {
  try {
    // Get request token
    const oAuthRequestToken = await requestToken();
    // Get authorization
    authorizeURL.searchParams.append(
      "oauth_token",
      oAuthRequestToken.oauth_token
    );
    // console.log("Please go here and authorize:", authorizeURL.href);
    // const pin = await input("Paste the PIN here: ");
    // Get the access token
    // const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());
    // Make the request
    // console.log(oAuthAccessToken);
    const response = await getRequest("oAuthAccessToken");

    console.log(response);
    // console.dir(response, {
    //   depth: null
    // });
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
};

const exportFunction = async (tweet) => {
  try {
    // Get request token
    const oAuthRequestToken = await requestToken();

    // Get authorization
    authorizeURL.searchParams.append(
      "oauth_token",
      oAuthRequestToken.oauth_token
    );

    // Uncomment the following lines if you want to include user input for PIN
    // console.log("Please go here and authorize:", authorizeURL.href);
    // const pin = await input("Paste the PIN here: ");

    // Get the access token
    // const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());

    // Make the request
    // console.log(oAuthAccessToken);
    const response = await getRequest(tweet);

    console.log(response);
    // console.dir(response, {
    //   depth: null
    // });
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
};

export default exportFunction;
