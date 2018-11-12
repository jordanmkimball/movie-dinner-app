var express = require('express');
var app = express();

//Code to enable body-parser to be used 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


//START OF GET REQUEST FUNCTIONS

//Renders the 'ticket' page.
exports.getTicket = function(req, res, next){
    res.render('ticket');
};

//Renders the about page.
exports.getAbout = function(req, res, next){
    res.render('about')
};

//START OF POST REQUEST FUNCTIONS

//display Halloween ticket purchase information on POST

exports.purchasePost = function(req, res, next){
    var showtime;
    var movie;
    if(req.body.halloween == 'Purchase Ticket'){
        showtime = req.body.halloweenShowtime;
        movie = 'Halloween (2018)'
        res.render('ticketPurchase', {Showtime: showtime, Movie: movie})
    }
    else if(req.body.nutcracker == 'Purchase Ticket'){
        showtime = req.body.nutcrackerShowtime;
        movie = 'The Nutcracker and the Four Realms'
        res.render('ticketPurchase', {Showtime: showtime, Movie: movie})
    }
    else if(req.body.venom == 'Purchase Ticket'){
        showtime = req.body.venomShowtime;
        movie = 'Venom'
        res.render('ticketPurchase', {Showtime: showtime, Movie: movie})
    }
    else {
        res.render('index')
    }
};