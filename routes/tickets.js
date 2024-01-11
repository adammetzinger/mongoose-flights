const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new (new funcionality)
router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);
// POST /flights/:flightId (create functionality)
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;