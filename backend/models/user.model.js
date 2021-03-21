const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: String,
    password: String,
    phoneNumber: Number,
    email: String
});

module.exports = mongoose.model('user', userschema);