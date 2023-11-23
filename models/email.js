const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email:{type: String, required: true},
    phone:{type: Number, required: true},
    restaurant: {type: String, required: true},
    message: {type: String, required: true},
    subscribeNewsletter:{type: Boolean},
    createdAt: { type: Date, default: Date.now},
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;