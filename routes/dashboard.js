const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.showDashboard);
router.delete('/delete-email/:id', dashboardController.deleteEmail);

module.exports = router;
