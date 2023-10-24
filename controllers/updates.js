// grab the model
const FlightModel = require('../models/flight');

// exports
module.exports = {
  create,
}

// create an update
async function create(req, res, next) {
  try {
    // console.log(req.params.id, "<--- req.params.id");
    // console.log(req.body, "<--- req.body. hopefully new form info");
    // grab the current Mongo document
    const flightDoc = await FlightModel.findById(req.params.id);
    // add submitted update info to destinations
    flightDoc.destinations.push(req.body);
    console.log(flightDoc, '<--- flightDoc');
    await flightDoc.save();
    res.redirect(`/flights/${flightDoc._id}`);
    } catch (error) {
    console.log(err);
    res.send(err);
  }
}