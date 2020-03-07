const mongoose = require('mongoose');

let serviceModel = new mongoose.Schema({
    staffFullName: String,
    serviceName: String,
    bin_iin: Number,
    serviceCategory: String,
    city: String,
    address: String,
    phoneNumber: Number,
    ranking: { type: Number, default: 0},
    orderAccepted: {
        type: Number,
        default: 0
    },
    orderInProcess: {
        type: Number,
        default: 0
    },
    orderIsDone: {
        type: Number,
        default: 0
    },
    numberOrder: { type: Number, default: 0},
    chatString: String
});

let Service = module.exports = mongoose.model('Service', serviceModel);