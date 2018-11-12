var express = require('express');
var router = express.Router();
//Require the main controller
var main_controller = require('../controllers/mainController');

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie and Dinner App Prototype' });
});

//GET Request for the (fake) printable ticket
router.get('/ticket', main_controller.getTicket);

//GET request for about page
router.get('/about', main_controller.getAbout);

//POST Request for Halloween Movie Ticket Purchases
router.post('/', main_controller.purchasePost);


module.exports = router;
