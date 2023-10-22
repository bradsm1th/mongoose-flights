// grab the model
const FlightModel = require('../models/flight');

// exports
module.exports = {
  create,
  index,
  new: newFlight,
}

/* =======================
/* functions
/* =====================*/

// create a new flight
async function create(req, res, next) {
  // "{}" (empty object) will return all matches
  console.log(req.body, "<-- is 'req.body'");

  // convert flightNo to an integer since it is submitted as a string
  req.body.flightNo = parseInt(req.body.flightNo)

  try {
    // add the flight to the DB
    const flightDoc = await FlightModel.create(req.body);
    // …then redirect to index
    res.redirect('/flights');
  } catch (err) {
    res.send(err)
  }
}


// find "all" flights and render them on '/movies/index.ejs'
async function index(req, res, next) {
  try {
    const flightDocs = await FlightModel.find({});
    res.render('flights/index', {
      flights: flightDocs
    })
    console.log(flightDocs);
  } catch (err) {
    res.send(err);
  }
}

// enter a new flight
function newFlight(req, res, next) {
  res.render('flights/new')
}