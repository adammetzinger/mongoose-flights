const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'Flight list', flights });
}

function newFlight(req, res) {
    res.render('flights/new', { title:'Add a new flight', errorMsg: '' });
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights/new');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: error.message })
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('flights/show', { title: 'Flight Details', flight, tickets });
}