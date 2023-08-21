const mongoose = require("mongoose");
const Message = require("./models/messageModel");
mongoose.connect(
  "mongodb+srv://azeez:Raza2003@cluster0.1rnci.mongodb.net/twitterai"
);

function splitStringByDelimiter(inputString) {
  const delimiter = "ttyuuh";
  const substrings = inputString.split(delimiter);
  return substrings;
}

const input = `Just deployed my latest #blockchain smart contract! 🚀 Exciting times ahead as we explore decentralized possibilities. ttyuuh 🏗️ Architectural inspiration strikes at the most unexpected moments. Sketching out ideas for a futuristic urban oasis. #ArchitectureDesign ttyuuh ⌨️ Coding marathon today! Breaking down complex problems into elegant lines of code is my kind of art. ttyuuh
The thrill of debugging: It's like solving a puzzle where every piece of the solution brings the big picture into focus. #DeveloperLife ttyuuh
Daydreaming about a cityscape where sustainable buildings seamlessly blend with nature. 🌿 #GreenArchitecture ttyuuh
Spent the day experimenting with neural networks and AI models. The future of technology is both thrilling and slightly mind-bending. ttyuuh
Waking up to a new day with a fresh stack of ideas to code and a blank canvas to design. Let's make some magic happen! ✨ ttyuuh
Just discovered a super efficient algorithm that drastically improved the app's performance. Feeling like a coding ninja right now. ttyuuh
Blockchain's potential to disrupt traditional industries is awe-inspiring. Imagine the possibilities of transparent supply chains and secure transactions. #BlockchainRevolution ttyuuh
Playing with colors, textures, and shapes to create an innovative facade design that tells a story. #ArchitecturalExpression ttyuuh
Diving into the world of smart contracts: writing code that enforces trust in a decentralized ecosystem. #Ethereum ttyuuh
Discussing the intricate dance between form and function in architecture. Each design choice has a purpose and an impact. 🏛️ ttyuuh
Another day, another breakthrough in blockchain scalability. Excited to see where this technology will take us! #CryptoInnovation ttyuuh
Debugging is like detective work, following clues to unravel the mystery behind the code's misbehavior. 🔍 #CodeSleuth ttyuuh
Behind every elegant line of code, there's a story of countless iterations, trial, and error. Persistence is key. #CodingJourney ttyuuh
Prototyping a new user interface for an app that's going to change the game. Usability meets aesthetics in this design challenge. ttyuuh
The symphony of urban life: observing how people interact with the spaces we create. Architecture has a profound impact on daily experiences. ttyuuh
Exploring the potential of decentralized finance (DeFi) and its role in reshaping traditional banking models. 🏦 #DeFiRevolution ttyuuh
Just realized the beauty of a well-optimized database query. Efficiency is a thing of wonder in the world of backend development. ttyuuh
Code review day: a time to learn from fellow developers, share insights, and improve the overall quality of our software. #Teamwork ttyuuh
Blockchain's immutability makes it a powerful tool for securing digital assets and records. Trust without intermediaries. #TrustlessTech ttyuuh
Designing spaces that foster collaboration and innovation, merging functionality with an inspiring environment. #CreativeWorkspace ttyuuh
Loving the challenge of fine-tuning algorithms to balance performance and accuracy. It's like tuning a musical instrument for a perfect melody. 🎵 ttyuuh
A sneak peek into my coding setup: multiple monitors, caffeine on standby, and a playlist of ambient tunes to keep the focus flowing. ttyuuh
Urban planning isn't just about structures; it's about shaping communities, connections, and the human experience. #CityscapeDreams ttyuuh
The blockchain ecosystem is a playground of innovation. From NFTs to cross-chain interoperability, there's always something new to explore. ttyuuh
3D printing and architecture: the future of construction is taking shape layer by layer. #TechInnovation ttyuuh
Refactoring code isn't just about making it work; it's about making it clean, maintainable, and future-proof. #CodeRefinement ttyuuh
Taking a break from coding to explore the art and culture of the city. Inspiration comes from unexpected places. 🎨🏙️ ttyuuh
Exciting times in the world of blockchain: Layer 2 solutions, proof-of-stake networks, and the evolution of consensus mechanisms. #CryptoEvolutions ttyuuh
Algorithmic design is like composing a symphony of logic. Every piece of code contributes to the harmonious functioning of the system. 🎶 ttyuuh
Architecture isn't limited to buildings; it's about creating environments that resonate with people's emotions and aspirations. #SpaceMatters ttyuuh
Revisiting old projects and being amazed at how much I've grown as a developer since then. Growth is a constant in this field. #CodeProgress ttyuuh
Embracing the power of automation to streamline repetitive tasks and free up time for more creative endeavors. #TechAdvancement ttyuuh
Learning a new programming language is like unlocking a new realm of possibilities. Today, it's all about diving into Rust. #CodingExploration ttyuuh
Deconstructing complex systems to understand their inner workings: a skill every developer hones over time. #ProblemSolving ttyuuh
Can't get enough of the mesmerizing architecture of ancient civilizations. Their innovation continues to inspire modern designs. #ArchitecturalHistory ttyuuh
The power of smart contracts lies in their ability to execute code automatically, enabling trust and efficiency in various industries. #SmartContracts ttyuuh
Sketching out a concept for a sustainable community that leverages renewable energy and green spaces to foster a sense of belonging. #CommunityDesign ttyuuh
The thrill of watching a smart contract execute flawlessly and autonomously, achieving trust without intermediaries. #SmartContractMagic ttyuuh
Just upgraded my coding setup with a new ergonomic chair and dual monitors. Creating a comfortable environment for productivity! 🪑💻 ttyuuh
Blockchain's impact on supply chain transparency is revolutionary. Imagine tracing the journey of products from source to shelf with ease. #SupplyChainBlockchain ttyuuh
Investigating the potential of zero-knowledge proofs to enhance privacy in blockchain transactions. The science of making secrets visible. #ZeroKnowledge ttyuuh
Captivated by the intersection of art and architecture—how space can be a canvas for creative expression that resonates with emotions. 🎨🏛️ ttyuuh
When designing databases, normalization and optimization are the tools of choice for ensuring efficient data storage and retrieval. #DatabaseDesign ttyuuh
The rise of non-fungible tokens (NFTs) has opened up new possibilities for digital ownership and creative monetization. Art on the blockchain! #NFTWave ttyuuh
Just finished coding a script that automates repetitive tasks. Time saved is productivity gained! ⏱️💼 #AutomationWins ttyuuh
Ethereum 2.0's shift to proof-of-stake promises scalability and reduced energy consumption. A pivotal moment in blockchain's evolution. #Eth2Upgrade ttyuuh
The synergy between architectural principles and coding paradigms: designing systems that are both visually appealing and functionally robust. 🏗️💻 ttyuuh
From Byzantine fault tolerance to consensus algorithms, understanding the technical foundations that make blockchain secure and reliable. #BlockchainSecurity ttyuuh
Revisiting classic architectural texts that continue to shape the way we think about space, structure, and the built environment. #ArchitecturalWisdom ttyuuh
Crafting a responsive design that ensures the user experience remains seamless across devices, from desktops to mobiles. #ResponsiveUX ttyuuh
The intricacies of hashing algorithms and cryptographic signatures: the building blocks of security in blockchain technology. 🔒 #CryptoSecurity ttyuuh
A day spent debugging, optimizing, and fine-tuning code feels like sculpting a piece of art, refining it until it's just right. #CodeCraftsmanship ttyuuh
Reflecting on the symbiotic relationship between urban planning and architectural design—how buildings shape the fabric of our cities. 🌆🏙️ ttyuuh
Just attended a blockchain meetup, and the discussions on DeFi, DAOs, and interoperability were mind-bogglingly fascinating. #BlockchainMeetup ttyuuh
From smart homes to smart cities, the Internet of Things (IoT) is connecting the physical world to the digital realm in unprecedented ways. #IoTInnovation ttyuuh
The evolution of coding: from punch cards to integrated development environments (IDEs), the tools we use shape the way we create. 🖥️ #CodingEvolution ttyuuh
Building secure login and authentication systems: protecting user data is paramount in today's interconnected digital landscape. 🔐 #SecurityFirst ttyuuh
Blockchain's impact on supply chain transparency is revolutionary. Imagine tracing the journey of products from source to shelf with ease. #SupplyChainBlockchain ttyuuh
Investigating the potential of zero-knowledge proofs to enhance privacy in blockchain transactions. The science of making secrets visible. #ZeroKnowledge ttyuuh
Captivated by the intersection of art and architecture—how space can be a canvas for creative expression that resonates with emotions. 🎨🏛️ ttyuuh
When designing databases, normalization and optimization are the tools of choice for ensuring efficient data storage and retrieval. #DatabaseDesign ttyuuh
The rise of non-fungible tokens (NFTs) has opened up new possibilities for digital ownership and creative monetization. Art on the blockchain! #NFTWave ttyuuh
Just finished coding a script that automates repetitive tasks. Time saved is productivity gained! ⏱️💼 #AutomationWins ttyuuh
Ethereum 2.0's shift to proof-of-stake promises scalability and reduced energy consumption. A pivotal moment in blockchain's evolution. #Eth2Upgrade ttyuuh
The synergy between architectural principles and coding paradigms: designing systems that are both visually appealing and functionally robust. 🏗️💻 ttyuuh
From Byzantine fault tolerance to consensus algorithms, understanding the technical foundations that make blockchain secure and reliable. #BlockchainSecurity ttyuuh
Revisiting classic architectural texts that continue to shape the way we think about space, structure, and the built environment. #ArchitecturalWisdom ttyuuh
Crafting a responsive design that ensures the user experience remains seamless across devices, from desktops to mobiles. #ResponsiveUX ttyuuh
The intricacies of hashing algorithms and cryptographic signatures: the building blocks of security in blockchain technology. 🔒 #CryptoSecurity ttyuuh
A day spent debugging, optimizing, and fine-tuning code feels like sculpting a piece of art, refining it until it's just right. #CodeCraftsmanship ttyuuh
Reflecting on the symbiotic relationship between urban planning and architectural design—how buildings shape the fabric of our cities. 🌆🏙️ ttyuuh
Just attended a blockchain meetup, and the discussions on DeFi, DAOs, and interoperability were mind-bogglingly fascinating. #BlockchainMeetup ttyuuh
From smart homes to smart cities, the Internet of Things (IoT) is connecting the physical world to the digital realm in unprecedented ways. #IoTInnovation ttyuuh
The evolution of coding: from punch cards to integrated development environments (IDEs), the tools we use shape the way we create. 🖥️ #CodingEvolution ttyuuh
Building secure login and authentication systems: protecting user data is paramount in today's interconnected digital landscape. 🔐 #SecurityFirst ttyuuh
Inspired by the biophilic design movement, integrating nature into architectural spaces to enhance well-being and creativity. #BiophilicDesign ttyuuh
Decentralized identity (DID) solutions have the potential to empower individuals to control and share their personal data securely. #SelfSovereignID ttyuuh
Just deployed a microservices architecture for a project—each component functioning independently while working together seamlessly. #Microservices ttyuuh
Exploring the infinite possibilities of generative design in architecture: algorithms that create innovative solutions based on parameters. 🎨🏗️ ttyuuh
Today's coding challenge: optimizing database queries to reduce load times and deliver a snappier user experience. #DatabaseOptimization ttyuuh
Blockchain's impact on supply chain transparency is revolutionary. Imagine tracing the journey of products from source to shelf with ease. #SupplyChainBlockchain ttyuuh
Investigating the potential of zero-knowledge proofs to enhance privacy in blockchain transactions. The science of making secrets visible. #ZeroKnowledge ttyuuh
Captivated by the intersection of art and architecture—how space can be a canvas for creative expression that resonates with emotions. 🎨🏛️ ttyuuh
When designing databases, normalization and optimization are the tools of choice for ensuring efficient data storage and retrieval. #DatabaseDesign ttyuuh
The rise of non-fungible tokens (NFTs) has opened up new possibilities for digital ownership and creative monetization. Art on the blockchain! #NFTWave ttyuuh
Just finished coding a script that automates repetitive tasks. Time saved is productivity gained! ⏱️💼 #AutomationWins ttyuuh
Ethereum 2.0's shift to proof-of-stake promises scalability and reduced energy consumption. A pivotal moment in blockchain's evolution. #Eth2Upgrade ttyuuh
The synergy between architectural principles and coding paradigms: designing systems that are both visually appealing and functionally robust. 🏗️💻 ttyuuh
From Byzantine fault tolerance to consensus algorithms, understanding the technical foundations that make blockchain secure and reliable. #BlockchainSecurity ttyuuh
Revisiting classic architectural texts that continue to shape the way we think about space, structure, and the built environment. #ArchitecturalWisdom ttyuuh
Crafting a responsive design that ensures the user experience remains seamless across devices, from desktops to mobiles. #ResponsiveUX ttyuuh
The intricacies of hashing algorithms and cryptographic signatures: the building blocks of security in blockchain technology. 🔒 #CryptoSecurity ttyuuh
A day spent debugging, optimizing, and fine-tuning code feels like sculpting a piece of art, refining it until it's just right. #CodeCraftsmanship ttyuuh
Reflecting on the symbiotic relationship between urban planning and architectural design—how buildings shape the fabric of our cities. 🌆🏙️ ttyuuh
Just attended a blockchain meetup, and the discussions on DeFi, DAOs, and interoperability were mind-bogglingly fascinating. #BlockchainMeetup ttyuuh
From smart homes to smart cities, the Internet of Things (IoT) is connecting the physical world to the digital realm in unprecedented ways. #IoTInnovation ttyuuh
The evolution of coding: from punch cards to integrated development environments (IDEs), the tools we use shape the way we create. 🖥️ #CodingEvolution ttyuuh
Building secure login and authentication systems: protecting user data is paramount in today's interconnected digital landscape. 🔐 #SecurityFirst ttyuuh`;
const resultArray = splitStringByDelimiter(input);

const sendEmTweets = async () => {
  for (let i = 0; i < resultArray.length; i++) {
    try {
      await Message.create({
        message: resultArray[i],
        status: false,
      });
      console.log({ status: i, sent: true });
    } catch (err) {
      console.log(err);
      console.log({ status: err, sent: false });
    }
  }
};

sendEmTweets()

//console.log(resultArray);
