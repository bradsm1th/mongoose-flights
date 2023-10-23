var express = require('express');
var router = express.Router();
module.exports = router;

// the controller
const flightController = require('../controllers/flights')

/* =======================
/*  Define routes
All routes start with '/flights')
/* =====================*/

// GET /flights (index for all)
router.get('/', flightController.index)

// GET /flights/new
router.get('/new', flightController.new);

// GET /flights/:id
router.get('/:id', flightController.show);

// POST /flights (add a new movie)
router.post('/', flightController.create);