const Users = require('./model.js');
const router = require('express').Router();

router.get('/placeholder', (req, res) => {
    res.json({ message: 'Hello from Paths!'})
});

module.exports = router;