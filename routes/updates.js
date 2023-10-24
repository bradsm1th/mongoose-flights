const express = require('express');
const router = express.Router();

// grab the controller
const updatesController = require('../controllers/updates');

// define the route(s)

// POST /flights/:id/updates
router.post('/flights/:id/updates', updatesController.create);

module.exports = router;

