const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the file from the "views" directory
    res.sendFile('picture.html', { root: 'views' });
});

module.exports = router;
