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
    // req.body   === the seat and price info
    console.log(req.body, "<--- req.body");
    // req.params === the flight's _id
    console.log(req.params, "<---req.params");

    // get the _id of the flight from the Flight model

    // add that flight (the ID, not the actual object) to the ticket

    // TicketModel.something.push(something)

    // redirect to that show page
    res.redirect(`/flights/${req.params.idOfFlight}`)

  } catch (err) {
    console.log(err);
    res.send(err);
    
  }
  
}


/* 💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗ */
// what's the point of this function? -> SHOW the new ticket form. NOT "create new ticket"
/* 💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗💡❗ */

// what did user just do?       click submit off show page
// what is request?             GET /flights/<an id>/tickets/new
// what *should* response be?   render that view

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