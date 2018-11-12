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
    var tableReservationTime;
    var restaurant;
    //Case where the submit button clicked was associated with Halloween
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

//display confirmed table reservation on POST

exports.reserveTablePost = function(req, res, next){
    var tableReservationTime;
    var restaurant;
    //Case where the submit button clicked was associated with the restaurant "The Refectory"
    if(req.body.refectory == 'Reserve Table'){
        tableReservationTime == req.body.refectoryReservation;
        restaurant = 'The Refectory';
        res.render('tableReservation', {table_reservation_time: tableReservationTime, Restaurant: restaurant});
    }
    else if(req.body.akaiHana == 'Reserve Table'){
        tableReservationTime == req.body.akaiHanaReservation;
        restaurant = 'Akai Hana';
        res.render('tableReservation', {table_reservation_time: tableReservationTime, Restaurant: restaurant});
    }
    else if(req.body.guildHouse == 'Reserve Table'){
        tableReservationTime == req.body.guildHouseReservation;
        restaurant = 'Guild House';
        res.render('tableReservation', {table_reservation_time: tableReservationTime, Restaurant: restaurant});
    }
}