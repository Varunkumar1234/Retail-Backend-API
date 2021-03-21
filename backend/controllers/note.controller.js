const user = require('../models/user.model.js');
const order = require('../models/order.model.js');
const product = require('../models/product.model.js');
const cart = require('../models/cart.model.js');

// Add new user details
exports.signup = (req, res) => {

    // Create a Note
    const users = new user({
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });

    // Save Note in the database
    users.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Create new cart
exports.createcart = (req, res) => {
    // Create a Note
    const carts = new cart({
        cartId: req.body.cartId,
        username: req.body.username,
        productsInCart: req.body.productsInCart,
        statusOfCart: req.body.statusOfCart
    });

    // Save Note in the database
    carts.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};


// Retrieve and return all notes from the database.
exports.getallcart = (req, res) => {
    cart.find()
        .then(carts => {
            res.send(carts);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};


// Find a single cart with username
exports.findusercart = (req, res) => {
    cart.findOne({ username: req.params.noteId })
        .then(carts => {
            if (!carts) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(carts);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
};

// Update a note identified by the noteId in the request
exports.additemtocart = (req, res) => {


    // Find note and update it with the request body
    cart.findOneAndUpdate({ username: req.params.noteId }, {
        productsInCart: req.body.productsInCart
    }, { new: true })
        .then(carts => {
            if (!carts) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(carts);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};


// Create new product
exports.createproduct = (req, res) => {
    // Create a Note
    const products = new product({
        productId: req.body.productId,
        productName: req.body.productName,
        productCode: req.body.productCode,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        manufacturer: req.body.manufacturer,
        osType: req.body.osType
    });

    // Save Note in the database
    products.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Retrieve all productdetails
exports.getproductdetails = (req, res) => {
    product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};


// Delete a note with the specified noteId in the request
exports.deleteproddetails = (req, res) => {
    product.findOneAndRemove({ productId: req.params.noteId })
        .then(products => {
            if (!products) {
                return res.status(404).send({
                    //message: "Note not found with id " + req.params.noteId
                    message: "Product Not Available"
                });
            }
            res.send({ message: "Product Removed successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    //message: "Note not found with id " + req.params.noteId
                    message: "Product Not Available"
                });
            }
            return res.status(500).send({
                //message: "Could not delete note with id " + req.params.noteId
                message: "Product Not Available"
            });
        });
};