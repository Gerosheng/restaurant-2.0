const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the index.html file from the "views" directory
    res.sendFile('picture3.html', { root: 'views' });
});

module.exports = router;
