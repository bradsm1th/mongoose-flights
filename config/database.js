// get whatever's in mongoose.exports
const mongoose = require('mongoose');

// actually connect to DB using our connection string
mongoose.connect(process.env.DATABASE_URL);

// save connection info for easier reference
const db = mongoose.connection;

// add a listener to log successful connection to our DB
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})