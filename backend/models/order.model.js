const mongoose = require('mongoose');

const orderschema = mongoose.Schema({
    orderId: Number,
    cartId: Number,
});

module.exports = mongoose.model('order', orderschema);