var express = require('express');
var router = express.Router();
module.exports = router;

// the controller
const flightController = require('../controllers/flights')

/* =======================
/*  Define routes
// 🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗🌭❗
All routes start with '/hotdogflights')
/* =====================*/

// GET /flights/new
router.get('/new', flightController.new);

