const Users = require('./model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            console.log('users', users);
            res.json(users);
        })
        .catch(err => {
            console.log('err', err);
            res.send(err);
        })
});

router.post('/', (req, res) => {
    const user = req.body;
    
    Users.add(user)
    .then(saved => {
      console.log('saved', saved);
      
      res.status(201).json(saved);
    })
    .catch((message, code, stack, name) => {
      res.status(500).json({message, code, stack, name});
    });
})

module.exports = router;