var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights'); 
const { get } = require('mongoose');

// all paths start with '/flights'
/* GET users listing. */
router.get('/', flightsCtrl.index);
//
router.get('/new', flightsCtrl.new);
//GET /flights/:id must be after new
router.get('/:id', flightsCtrl.show);
// post /flights (create action)
router.post('/', flightsCtrl.create);

module.exports = router;
