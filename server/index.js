// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// Sign Up Api 
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/signUp', function(req, res) {
    res.json({ signUp: true });   
});

const apiresponse = [
    { fNumner: 'Air222', fName: 'Air india', email: 'AirIndia@demo.com', departure: '7:30', from: 'London', to: 'Delhi', arrival: "18:30 Next Day", price: "$430.00", seatAvaible: `34`, duration:'12 hrs'},
    { fNumner: 'Air333', fName: 'Air india', email: 'AirIndia@demo.com', departure: '12:30', from: 'London', to: 'Delhi', arrival: "8:30 Next Day", price: "$430.00", seatAvaible: `34`, duration:'12 hrs'},
    { fNumner: 'Air444', fName: 'Air india', email: 'AirIndia@demo.com', departure: '9:30', from: 'London', to: 'Delhi', arrival: "8:30 Next Day", price: "$430.00", seatAvaible: `34`, duration:'12 hrs'},
    { fNumner: 'Air021', fName: 'Air india', email: 'AirIndia@demo.com', departure: '7:30', from: 'France', to: 'Delhi', arrival: "18:30 Next Day", price: "$412.00", seatAvaible: `34` , duration:'15 hrs' },
    { fNumner: 'BJ001', fName: 'Britesh Jet', email: 'British@demo.com', departure: '12:30', from: 'London', to: 'France', arrival: "12:30 Next Day", price: "$444.00", seatAvaible: `312`,duration:'14 hrs' },
    { fNumner: 'BJ801', fName: 'Britesh Jet', email: 'British@demo.com', departure: '1:30', from: 'Delhi', to: 'London', arrival: "14:30 Next Day", price: "$455.00", seatAvaible: `223` ,duration:'18 hrs'},
    { fNumner: 'Amr888', fName: 'America Airways', email: 'jetAirways@demo.com', departure: '7:30', from: 'London', to: 'Delhi', arrival: "18:30 Next Day", price: "$500.00", seatAvaible: `34`, duration:'12 hrs'},
    { fNumner: 'Amr888', fName: 'America Airways', email: 'jetAirways@demo.com', departure: '7:30', from: 'London', to: 'Delhi', arrival: "18:30 Next Day", price: "$500.00", seatAvaible: `34`, duration:'12 hrs'},
    { fNumner: 'Amr888', fName: 'America Airways', email: 'jetAirways@demo.com', departure: '7:30', from: 'France', to: 'Delhi', arrival: "18:30 Next Day", price: "$500.00", seatAvaible: `34`, duration:'12 hrs'},
    { fNumner: 'Jet888', fName: 'America Airways', email: 'jetAirways@demo.com', departure: '7:30', from: 'London', to: 'France', arrival: "18:30 Next Day", price: "$500.00", seatAvaible: `34`, duration:'12 hrs'},
]
// Air tickets  Api 
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/tickets', function(req, res) {
    res.json({ data: apiresponse });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
