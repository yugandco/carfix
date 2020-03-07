const mongoose = require('mongoose');

let clientSchema = mongoose.Schema({
    user_id: String,
    title: String,
    detail: String,
    category: String,
    date: {
        day: String,
        hour: String,
        minute: String
    },
    car: String,
    mycar: String,
    city: String,
    cost: Number,
    fillingDate: {
        type: Date,
        default: Date.now
    }
});

let Client = module.exports = mongoose.model('Client', clientSchema);