var express = require('express');
var router = express.Router();
module.exports = router;

// the controller
const ticketController = require('../controllers/tickets')

/* =======================
/*  Define routes
All routes start with '/')
/* =====================*/

// GET /flights/:id/tickets (create a new ticket)
router.get('/flights/:idOfFlight/tickets/new', ticketController.new);

// POST /flights/:idOfFlight/tickets
router.post('/flights/:idOfFlight/tickets', ticketController.addTicket)