const mongoose = require('mongoose');

const cartschema = mongoose.Schema({
    cartId: Number,
    username: String,
    productsInCart: Array,
    statusOfCart: String
});

module.exports = mongoose.model('cart', cartschema);