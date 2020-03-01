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

router.delete('/:id', validateUserId, (req, res) => {
    const id = req.params.id;

    Users.deleteUser(id)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: "failed to remove the student" });
      });
});

//custom middleware

function validateUserId(req, res, next) {
    const { id } = req.params;

    Users.findById(id)
    .then(user => {
      console.log('user', user);
      if( !Object.keys(user).length ){
        res.status(400).json({ message: "invalid user id" });
      }else next();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: `Couldn't retrieve a user with id of ${id}` });
    });
}

module.exports = router;