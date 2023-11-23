const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email:{type: String, required: true},
    phone:{type: Number, required: true},
    restaurant: {type: String, required: true},
    message: {type: String, required: true},
    subscribeNewsletter:{type: Boolean},
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
          // Format the date to 'day/month/year, hour:minute'
          return createdAt.toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          }).replace(/\//g, '-'); // Replace '/' with '-' for the desired format
        },
      },
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;