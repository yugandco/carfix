const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    vin: {
        type: String
    },
    iin: {
        type: String
    }
});

let User = module.exports = mongoose.model('User', userSchema);