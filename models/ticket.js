const mongoose = require('mongoose');

// define schema
const ticketSchema = new mongoose.Schema(
  {
    seat: {
      type: String,
      match: /[A-F][1-9]\d?/
    },
    price: {
      type: Number,
      min: 0
    },
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      // use _id from Flight model
      ref: 'Flight'
    }
  }, {
  timestamps: true
})

// export schema into mongoose model labelled 'Ticket'
module.exports = mongoose.model('Ticket', ticketSchema);