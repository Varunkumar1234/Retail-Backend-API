
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var notes = require('../controllers/note.controller.js');

//Add singup details
router.route('/signup')
    .post(notes.signup);

//Create user cart
router.route('/carts')
    .post(notes.createcart);

//Get cart details
router.route('/carts')
    .get(notes.getallcart);

//Get user specific cart detail
router.route('/carts/:noteId')
    .get(notes.findusercart);

//Put additional items to cart
router.route('/carts/:noteId')
    .put(notes.additemtocart);

//Add Products details
router.route('/tablets')
    .post(notes.createproduct);

//Get all Products details
router.route('/tablets')
    .get(notes.getproductdetails);

//Delete product using productid
router.route('/tablets/:noteId')
    .delete(notes.deleteproddetails);

// Export API routes
module.exports = router;