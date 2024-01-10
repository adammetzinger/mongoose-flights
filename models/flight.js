const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: { type: String },
    arival: { type: Date },
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['Alaska', 'Delta', 'United', 'American'], required: true},
    airport: {type: String, deafult: 'SEA', enum: ['SEA', 'DFW', 'DEN', 'LAX', 'JFK', 'SFO'], required: true},
    flightNo: {type: Number, min: 10, max: 9999, required: true},
    departs: { type: String, default: function(){
       return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destination: [destinationSchema],
},
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);