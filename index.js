import Twit from "twit";
import express, { json } from "express";
const app = express();
import cors from "cors";
import { schedule } from "node-cron";

const client = new Twit({
  consumer_key: "r1EVyzUgxNDwqOwGi7mn1zCFx",
  consumer_secret: "nYavyXPZbPtEXPN471c6aINBEKvjul2uwxQBdrh5J27PAkcV92",
  access_token: "1377339725095264260-ZozWRPnXaaoH7oWz5QhmyagnXtFWar",
  access_token_secret: "wUszmqfkyW3w67VJFo4k3Jc3kJbpaDoGwvsVucW9qS9ZQ",
});

app.use(cors());
app.use(json());

var my_array = [
  {
    message:
      "One of the goals of being a backend and blockchain developer is to make the web more open, transparent and democratic. I use blockchain technologies to create applications that are decentralized, secure and fair. They empower users and communities.",
    status: false,
  },
  {
    message:
      "Debugging React can be tricky sometimes, but these tools make it easier: Chrome DevTools, React DevTools and VS Code. They help me find and fix errors in no time. They are very useful and powerful.",
    status: false,
  },
  {
    message:
      "CSS modules and styled-components are awesome for styling React components. They let me write modular and scoped styles that are easy to maintain and reuse. They are the best way to style React components in my opinion.",
    status: false,
  },
  {
    message:
      "Netlify and Vercel are amazing for hosting and deploying React apps. They are fast, easy and free. They also offer SSL, CDN and serverless functions. They are the best platforms for React apps in my opinion.",
    status: false,
  },
  {
    message:
      "Custom hooks are one of my favorite features of React. They allow me to extract and reuse logic that is common to multiple components. They help me avoid code duplication and improve readability. They are very handy and elegant.",
    status: false,
  },
  {
    message:
      "Props and state are essential for creating dynamic and interactive UIs in React. Props pass data from parent to child components, and state manages data that changes over time within a component. They are the core concepts of React.",
    status: false,
  },
  {
    message:
      "Lifecycles are important for controlling the behavior and side effects of React components. They perform actions at different stages of a component’s life, such as mounting, updating and unmounting. They are the key to managing the component’s life cycle.",
    status: false,
  },
  {
    message:
      "Higher-order components are a great way to enhance the functionality of existing components in React. They wrap another component with a new component that adds some features or logic. They are a powerful technique for creating reusable and composable UIs.",
    status: false,
  },
  {
    message:
      "NextJs is a fantastic framework for building React apps. It offers features like server-side rendering, static site generation, routing and more. It makes React development faster and easier.",
    status: false,
  },
  {
    message:
      "React vs NextJs: which one should you use for your web project? It depends on your needs and preferences. React is more flexible and lightweight, while NextJs is more powerful and feature-rich.",
    status: false,
  },
  {
    message:
      "Being a developer is not easy, but it’s rewarding. I love solving problems, creating things and learning new skills. I also enjoy the challenges and opportunities that come with it.",
    status: false,
  },
  {
    message:
      "NextJs has a lot of benefits for SEO and performance. It renders the pages on the server, which improves the loading speed and the user experience. It also helps with indexing and ranking on search engines.",
    status: false,
  },
  {
    message:
      "React is a great library for building UIs. It has a simple and declarative syntax, a component-based architecture and a virtual DOM. It makes UI development fun and efficient.",
    status: false,
  },
  {
    message:
      "NextJs has a built-in API feature that allows you to create serverless functions in your app. You can use them to handle data fetching, authentication, payments and more. They are very convenient and scalable.",
    status: false,
  },
  {
    message:
      "React has a large and active community of developers. You can find a lot of resources, tutorials, libraries and tools to help you with your React projects. You can also get support and feedback from other developers.",
    status: false,
  },
  {
    message:
      "NextJs supports TypeScript out of the box. You can use it to add type safety and improve developer experience in your NextJs app. You can also use it with React components and custom hooks.",
    status: false,
  },
  {
    message:
      "React has a lot of advantages over other UI libraries and frameworks. It is fast, easy to learn, modular, reusable and testable. It also has a high demand and popularity in the job market.",
    status: false,
  },
  {
    message:
      "NextJs is compatible with most of the React libraries and tools. You can use them to enhance your NextJs app with additional features and functionalities. You can also use them to customize your app according to your needs.",
    status: false,
  },
  {
    message:
      "NextJs makes it easy to create dynamic routes in your app. You can use file names, brackets and catch-all routes to create different URL patterns. You can also use getStaticPaths and getServerSideProps to fetch data for each route.",
    status: false,
  },
  {
    message:
      "React has a rich ecosystem of libraries and tools that you can use to enhance your app. Some of my favorites are React Router, Axios, Material UI, React Query and React Testing Library. What are yours?",
    status: false,
  },
  {
    message:
      "Being a blockchain developer is exciting and innovative. I love working with smart contracts, decentralized applications and cryptocurrencies.",
    status: false,
  },
  {
    message:
      "Backend development and blockchain development have a lot in common. They both deal with data, logic, security and scalability. They also both require good problem-solving and debugging skills. However, they also have some differences, such as the level of transparency, immutability and consensus.",
    status: false,
  },
  {
    message:
      "One of the challenges of backend development is ensuring the reliability and availability of the server. You have to handle errors, failures, downtime and backups. You also have to monitor the performance and health of the server. Some of the tools that can help you with that are Nodemon, PM2, Sentry and New Relic.",
    status: false,
  },
  {
    message:
      "One of the challenges of blockchain development is ensuring the security and correctness of the smart contracts. You have to avoid bugs, vulnerabilities, hacks and attacks. You also have to test and audit the smart contracts. Some of the tools that can help you with that are Remix, Ganache, Mocha and MythX.",
    status: false,
  },
  {
    message:
      "Backend developers are the architects of the digital world, designing and implementing robust server-side solutions. Proud to be part of this innovative field! ",
    status: false,
  },
  {
    message:
      "Blockchain development is reshaping industries like finance, supply chain, and healthcare. Thrilled to contribute to the decentralized revolution!",
    status: false,
  },
  {
    message:
      "I love the challenge of optimizing server performance, ensuring scalability, and handling complex data flows.",
    status: false,
  },
  {
    message:
      "Blockchain technology has the potential to transform various sectors, from finance to governance. Proud to be a blockchain developer driving this change! ",
    status: false,
  },
  {
    message:
      "Backend development is like the backbone of an application, ensuring seamless data processing, security, and scalability. ",
    status: false,
  },
  {
    message:
      "Blockchain development opens doors to creating transparent, secure, and tamper-resistant applications. Exciting times ahead! ",
    status: false,
  },
  {
    message:
      "I get to work with databases, APIs, and server infrastructure to bring applications to life. It's a fascinating blend of art and science! ",
    status: false,
  },
  {
    message:
      "Blockchain developers are at the forefront of the decentralized movement, building trustless systems that redefine how we interact and transact. Proud to be part of this evolution!",
    status: false,
  },
  {
    message:
      "Blockchain development requires a deep understanding of distributed systems and cryptography, paving the way for a secure and transparent future. ",
    status: false,
  },
  {
    message:
      "I enjoy the challenge of optimizing code for performance, efficiency, and scalability. It's like solving puzzles every day!",
    status: false,
  },
  {
    message:
      "Backend developers play a crucial role in shaping user experiences by designing robust APIs and data architectures.",
    status: false,
  },
  {
    message:
      "Blockchain developers bridge the gap between technology and real-world applications, leveraging smart contracts and decentralized systems to empower users. ",
    status: false,
  },
  {
    message:
      "One of the joys of being a backend and blockchain developer is seeing my creations come to life. I love deploying my applications to the web and watching them interact with real users and real transactions. It’s amazing and satisfying.",
    status: false,
  },
  {
    message:
      "Blockchain developers are explorers of new frontiers, driving innovation by building decentralized solutions that challenge traditional systems. Thrilled to be part of this transformative field! ",
    status: false,
  },
  {
    message:
      "Building a decentralized app with #Ethereum and #React is challenging but rewarding. I love how I can create smart contracts that run on the blockchain and interact with the frontend seamlessly.",
    status: false,
  },
  {
    message:
      "One of the most exciting aspects of being a blockchain developer is learning new technologies and frameworks. Lately, I’ve been exploring #Solana, a high-performance blockchain that supports thousands of transactions per second and low fees.",
    status: false,
  },
  {
    message:
      "Backend and blockchain development are not mutually exclusive, they are complementary. I use backend technologies to create APIs, databases and servers that communicate with the blockchain and provide data and functionality to the frontend.",
    status: false,
  },
  {
    message:
      "One of the challenges of being a backend and blockchain developer is dealing with scalability and performance issues. That’s why I use tools like #Redis, #RabbitMQ and #AWS to optimize my applications and ensure they can handle high traffic and load.",
    status: false,
  },
  {
    message:
      "Being a backend and blockchain developer is not only a job, it’s also a hobby and a passion. I spend my free time working on personal projects, exploring new technologies and contributing to open source. It’s fun, rewarding and fulfilling.",
    status: false,
  },
  {
    message:
      "One of the skills that every backend and blockchain developer should have is debugging. I use tools like #ChromeDevTools, #VSCode and #Remix to inspect, trace and fix errors in my code. They save me a lot of time and frustration.",
    status: false,
  },
];

function getIndexByMessage(array, message) {
  var index = array.findIndex(function (obj) {
    return obj.message === message;
  });
  return index;
}

function editMessageByIndex(array, index, newMessage) {
  if (index >= 0 && index < array.length) {
    array[index].message = newMessage;
  } else {
    console.log("Invalid index!");
  }
}

// schedule("0 12 * * *", () => {
//   const onFinish = (err, reply) => {
//     if (err) {
//       console.log({ status: "Error", erro: err.message });
//     } else {
//       console.log({ status: "Done", message: reply });
//     }
//   };

//   for (var i = 0; i < my_array.length; i++) {
//     var obj = my_array[i];
//     if (obj.status === false) {
//       client.post("statuses/update", { status: obj.message }, onFinish);
//       obj.status = true;
//       break;
//     }
//   }
// });

// schedule("0 8 * * *", () => {
//   const onFinish = (err, reply) => {
//     if (err) {
//       console.log({ status: "Error", erro: err.message });
//     } else {
//       console.log({ status: "Done", message: reply });
//     }
//   };

//   for (var i = 0; i < my_array.length; i++) {
//     var obj = my_array[i];
//     if (obj.status === false) {
//       client.post("statuses/update", { status: obj.message }, onFinish);
//       obj.status = true;
//       break;
//     }
//   }
// });

// schedule("0 14 * * *", () => {
//   const onFinish = (err, reply) => {
//     if (err) {
//       console.log({ status: "Error", erro: err.message });
//     } else {
//       console.log({ status: "Done", message: reply });
//     }
//   };

//   for (var i = 0; i < my_array.length; i++) {
//     var obj = my_array[i];
//     if (obj.status === false) {
//       client.post("statuses/update", { status: obj.message }, onFinish);
//       obj.status = true;
//       break;
//     }
//   }
// });

// schedule("0 15 * * *", () => {
//   const onFinish = (err, reply) => {
//     if (err) {
//       console.log({ status: "Error", erro: err.message });
//     } else {
//       console.log({ status: "Done", message: reply });
//     }
//   };

//   for (var i = 0; i < my_array.length; i++) {
//     var obj = my_array[i];
//     if (obj.status === false) {
//       client.post("statuses/update", { status: obj.message }, onFinish);
//       obj.status = true;
//       break;
//     }
//   }
// });

// schedule("0 20 * * *", () => {
//   const onFinish = (err, reply) => {
//     if (err) {
//       console.log({ status: "Error", erro: err.message });
//     } else {
//       console.log({ status: "Done", message: reply });
//     }
//   };

//   for (var i = 0; i < my_array.length; i++) {
//     var obj = my_array[i];
//     if (obj.status === false) {
//       client.post("statuses/update", { status: obj.message }, onFinish);
//       obj.status = true;
//       break;
//     }
//   }
// });

// const tweet = () => {
//   const text = "Hey!";

//   const onFinish = (err, reply) => {
//     if (err) {
//       console.log("Error: ", err.message);
//     } else {
//       console.log("Success: ", reply);
//     }
//   };

//   client.post("statuses/update", { status: text }, onFinish);
// };

// tweet();

function yourFunction() {
  // Your function's code goes here
  const onFinish = (err, reply) => {
    if (err) {
      console.log({ status: "Error", erro: err.message });
    } else {
      console.log({ status: "Done", message: reply });
    }
  };

  for (var i = 0; i < my_array.length; i++) {
    var obj = my_array[i];
    if (obj.status === false) {
      client.post("statuses/update", { status: obj.message }, onFinish);
      obj.status = true;
      break;
    }
  }
}

function executeFunctionAtScheduledTimes() {
  const scheduleTimes = ["03:40:00", "12:00:00", "16:00:00", "20:00:00", "08:00:00"];

  setInterval(() => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString("en-US", { hour12: false });

    if (scheduleTimes.includes(currentTime)) {
      // Call your function here
      yourFunction();
    }
  }, 1000); // Check every second (adjust the interval as needed)
}



executeFunctionAtScheduledTimes();

app.get("/api/postStatus", async (req, res) => {
  const onFinish = (err, reply) => {
    if (err) {
      res.json({ status: "Error", erro: err.message });
    } else {
      res.json({ status: "Done", message: reply });
    }
  };

  for (var i = 0; i < my_array.length; i++) {
    var obj = my_array[i];
    if (obj.status === false) {
      client.post("statuses/update", { status: obj.message }, onFinish);
      obj.status = true;
      break;
    }
  }
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
  var filteredArray = my_array.filter(function (obj) {
    return obj.status === true;
  });
  res.json({ status: "Done", arr: filteredArray });
});

app.get("/api/getNotSent", async (req, res) => {
  var filteredArray = my_array.filter(function (obj) {
    return obj.status === false;
  });
  res.json({ status: "Done", arr: filteredArray.slice(0, 12) });
});

app.post("/api/editMessage", async (req, res) => {
  var messageIndex = getIndexByMessage(my_array, req.body.previousMessage);
  console.log(messageIndex);
  console.log(req.body.previousMessage);
  console.log(req.body.newMessage);
  editMessageByIndex(my_array, messageIndex, req.body.newMessage);
  res.json({ status: "done" });
});

app.post("/api/addTweet", async (req, res) => {
  try {
    var newItem = {
      message: req.body.message,
      status: false,
    };
    my_array.unshift(newItem);
    console.log("done");
  } catch {}
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
