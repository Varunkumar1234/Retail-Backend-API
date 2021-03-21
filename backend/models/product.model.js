const mongoose = require('mongoose');

const productschema = mongoose.Schema({
    productId: Number,
    productName: String,
    productCode: Number,
    description: String,
    price: Number,
    rating: Number,
    manufacturer: String,
    osType: String
})

module.exports = mongoose.model('product', productschema);