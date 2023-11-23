const mongoose = require('mongoose');
const Email = require('../models/email');

exports.showDashboard = async (req, res) => {
    try {
        const emails = await Email.find({});
        res.render('dashboard', { emails });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};