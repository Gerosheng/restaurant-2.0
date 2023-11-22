const Email = require('../models/email');

exports.submitContactForm = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, restaurant, message } = req.body;
        const newEmail = new Email({ firstname, lastname, email, phone, restaurant, message });
        await newEmail.save();
        res.status(200).json({ message: 'Email sent succesfully!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}