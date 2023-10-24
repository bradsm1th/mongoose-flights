const express = require('express');
const router = express.Router();

// grab the controller
const destinationsController = require('../controllers/destinations');

// define the route(s)

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsController.create);

module.exports = router;

