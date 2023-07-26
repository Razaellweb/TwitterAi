const mongoose = require('mongoose');

const Tweets = new mongoose.Schema({
    message: {type: String, required: true, unique: true},
    status: {type: Boolean, required: true},
}, 
{collection: "space-user"})

const model = mongoose.model("tweets", Tweets)

module.exports = model;

