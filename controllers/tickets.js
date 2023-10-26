// grab the models I'll need
const FlightModel = require('../models/flight');
const TicketModel = require('../models/ticket');

// exports
module.exports = {
addTicket,
new: newTicket
}

/* =======================
/* functions
/* =====================*/

async function addTicket(req, res, next) {

  try {
    console.log(req.params, "<-_-_-_-_- req.params")
    // get the _id of the flight from the Flight model
    // const theIdIWant = await FlightModel.find({_id: req.params.idOfFlight})

  } catch (err) {
    console.log(err);
    res.send(err);
    
  }
  
    // req.params === the flight's _id
    console.log(req.params, "<--------params")
    
    // req.body   === the seat and price info
    console.log(req.body, "<--------body")


    res.render("", )
}


/* 💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗ */
// point: SHOW the new ticket form. NOT "create new ticket"
/* 💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗ */

// what did user just do?     click submit off show page
// what is request?           GET /flights/<an id>/tickets/new
// what *should* response be? render that view

function newTicket(req, res, next) {

  // see what came in on the form
  console.log(req.params, "<---------req.params");
  console.log(req.params.idOfFlight, "<---------req.params.idOfFlight");

  // send that (flight ID) to render
// <<<< this needs the flight info which is knows
  res.render('tickets/new', {
    idOfFlight: req.params.idOfFlight
  });
  // res.send("HI")
}