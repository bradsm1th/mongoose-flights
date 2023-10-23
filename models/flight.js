// define model
const mongoose = require('mongoose');


// define embedded/subdoc Schema
const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['ATL', 'DEN', 'JFK', 'LAX', 'SAN'],
  },
  arrival: Date
})

// define main/parent Schema
const flightsSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['Lufthansa', 'Emirates', 'Northeast']
  },
  airport: {
    type: String,
    enum: ['ATL', 'DEN', 'JFK', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departsAt: {
    type: Date,
    // set default to "a year from today"
    // …set default to a function instead of a date object
    // ……return whatever the math is (Date.now + (1000ms * 60s * 60min * 24h * 365d))
    default: function () {
      return new Date(Date.now() + (1000 * 60 * 60 * 24 * 365))
    }
  }
}, {
  timestamps: true
});

// compile schema and export into model
module.exports = mongoose.model('Flight', flightsSchema);

// go use model in controller