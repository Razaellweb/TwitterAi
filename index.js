import Twit from "twit";
import express from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import Message from "./models/messageModel.js";
import exportFunction from "./postTweet.js";
import dotenv from "dotenv";


dotenv.config();

const client = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
});

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.uri
);

const getFalseMessage = async () => {
  const obj = await Message.find({
    status: false,
  });
  return obj[obj.length - 1];
};

const changeStatus = async (message) => {
  await Message.findOneAndUpdate(
    {
      message: message,
    },
    { status: true }
  );
};

app.get("/api/postStatus", async (req, res) => {
  const onFinish = (err, reply) => {
    if (err) {
      res.json({ status: "Error", erro: err.message });
    } else {
      res.json({ status: "Done", message: reply });
    }
  };

  var obj = await getFalseMessage();
  console.log(obj);
  // client.post("statuses/update", { status: obj.message }, onFinish);
  exportFunction(obj.message);
  changeStatus(obj.message);
});

app.get("/api/getPastTweets", async (req, res) => {
  client
    .get("statuses/user_timeline", { count: 12 })
    .then((tweets) => {
      res.json({ status: "Done", arr: tweets.data });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/api/getSent", async (req, res) => {
  const obj = await Message.find({
    status: true,
  });
  res.json({ status: "Done", arr: obj });
});

app.get("/api/getNotSent", async (req, res) => {
  const obj = await Message.find({
    status: false,
  });
  res.json({ status: "Done", arr: obj.reverse().slice(0, 12) });
});

app.post("/api/editMessage", async (req, res) => {
  await Message.findOneAndUpdate(
    {
      message: req.body.previousMessage,
    },
    { message: req.body.newMessage }
  );
  res.json({ status: "done" });
});

app.post("/api/addTweet", async (req, res) => {
  try {
    await Message.create({
      message: req.body.message,
      status: false,
    });
    res.json({ status: "message sent succesfully", sent: true });
  } catch (err) {
    console.log(err);
    res.json({ status: err, sent: false });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server successfully started");
});

// async function tweetThread(thread) {
//   let lastTweetID = "";
//   for (const status of thread) {
//     const tweet = await client.post("statuses/update", {
//       status: status,
//       in_reply_to_status_id: lastTweetID,
//       auto_populate_reply_metadata: true,
//     });
//     lastTweetID = tweet.id_str;
//   }
// }

// const thread = ["First tweet", "Second tweet", "Third tweet"];
// tweetThread(thread).catch(console.error);

// client
//   .post("statuses/update", { status: "Hello, world!" })
//   .then((tweet) => {
//     console.log(tweet);
//     const tweetId = tweet.id_str;
//     client
//       .post("statuses/update", {
//         status: "This is a reply to the previous tweet",
//         in_reply_to_status_id_str: tweetId,
//       })
//       .then((reply) => {
//         console.log(reply);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// client
//   .get("account/verify_credentials")
//   .then((results) => {
//     console.log("results", results);
//   })
//   .catch(console.error);
