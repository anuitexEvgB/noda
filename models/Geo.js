const {Schema, model} = require('mongoose');

const schema = new Schema({
    lat: Number,
    lng: Number,
    description: String,
    date: Date,
});

module.exports = model('geo', schema);