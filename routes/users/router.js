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

router.get('/:id', validateUserId, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(user => {
      res.json(user);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get user' });
  });
});

router.get('/:id/paths', validateUserId, (req, res) => {
    const { id } = req.params;
  
    Users.findPaths(id)
    .then(paths => {
      if (paths.length) {
        res.json(paths);
      } else {
        res.status(404).json({ message: 'Could not find paths for given user' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get the paths' });
    });
});

router.post('/:id/paths', validateUserId, (req, res) => {
  const pathData = req.body;
  const { id } = req.params; 
  pathData.user_id = id;
  
  Users.findById(id)
  .then(user => {
      Users.addPath(pathData, id)
      .then(path => {
        res.status(201).json(path);
      })
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new path' });
  });
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