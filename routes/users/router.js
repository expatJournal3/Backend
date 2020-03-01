const Users = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ users: 'up' });
    // Users.find()
    //     .then(users => {
    //         console.log('users', users);
    //         res.json(users);
    //     })
    //     .catch(err => {
    //         console.log('err', err);
    //         res.send(err);
    //     })
});

router.post('/', (req, res) => {
    
})

module.exports = router;