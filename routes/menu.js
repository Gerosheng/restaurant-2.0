const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the menu.html file from the "views" directory
    res.sendFile('menu.html', { root: 'views' });
});

module.exports = router;

