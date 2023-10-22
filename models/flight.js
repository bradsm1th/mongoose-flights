// define model
const mongoose = require('mongoose');

// define schema
const flightsSchema = new mongoose.Schema( {
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
    default: new Date()
  }
}, {
  timestamps: true
});

// compile schema and export into model
module.exports = mongoose.model('Flight', flightsSchema);

// go use model in controller