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

exports.deleteEmail = async (req, res) => {
    try {
      const emailId = req.params.id;
      // Use Mongoose to find and delete the email by its ID
      const deletedEmail = await Email.findByIdAndDelete(emailId);
  
      if (!deletedEmail) {
        return res.status(404).json({ error: 'Email not found' });
      }
  
      res.status(200).json({ message: 'Email deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };