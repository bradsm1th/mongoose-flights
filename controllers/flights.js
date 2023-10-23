// grab the model
const FlightModel = require('../models/flight');

// exports
module.exports = {
  create,
  index,
  new: newFlight,
  show
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

  // assign default time (1 year from now) if not specified by user
  // console.log(('' === req.body.departsAt), "<----- departsAt is empty string aka not provided");
  if (req.body.departsAt === '') {
    delete req.body.departsAt;
  }

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

// show details for one flight
async function show(req, res, next) {
  console.log("Hello from show()!");
  try {
    // map the form ID to the right document in the model
    console.log(req.params.id);
    const thisFlightDoc = await FlightModel.findById(req.params.id);
    console.log(thisFlightDoc);
    // cool that worked—now render the view
    res.render('flights/show', flight = thisFlightDoc);
  } catch(err){
    console.log(err);
    res.send(err);
  }

}