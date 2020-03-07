const mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
    type: String
});

let Category = module.exports = mongoose.model('Category', categorySchema);