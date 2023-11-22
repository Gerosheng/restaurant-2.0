const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the index.html file from the "views" directory
    res.sendFile('restaurants.html', { root: 'views' });
});

module.exports = router;
