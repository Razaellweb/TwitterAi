// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Tweets = new mongoose.Schema({
    message: {type: String, required: true},
    status: {type: Boolean, required: true},
}, 
{collection: "space-user"})

const Message = mongoose.model("tweets", Tweets)

export default Message;

