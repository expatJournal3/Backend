const Users = require('./model.js');
const Paths = require('../paths/model.js');
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
  
router.get('/:id/following', validateUserId, (req, res) => {
    const { id } = req.params;
    
    Users.findFollowers(id)
    .then(followers => {
        if (followers.length) {
          res.json(followers);
        } else {
          res.status(404).json({ message: 'Could not find users you\'re following' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get the users you\'re following' });
      });
});

router.post('/:id/paths', validateUserId, validateInput, (req, res) => {
  const pathData = req.body;
  const { id } = req.params; 
  pathData.user_id = id;
  console.log(pathData);
  
  Users.findById(id)
  .then(user => {
      Users.addPath(pathData, id)
      .then(path => {
        console.log('path', path);
        res.status(201).json(path);
      })
  })
  .catch (err => {
    console.log('err', err);
    res.status(500).json({ message: 'Failed to create new path' });
  });
});

router.post('/:id/following', validateUserId, (req, res) => {
  const follower = req.body;
  const { id } = req.params; 
  follower.user_id = Number(id);
  
  Users.findById(id)
    .then(user => {
      console.log('user', user);
      Users.findByEmail(follower.email)
        .then(returnedFollower => {
          Users.addFollower(follower)
          .then(added => {

            res.status(201).json(added);
          })
          .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

router.delete('/:id', validateUserId, (req, res) => {
    const id = req.params.id;

    Users.deleteUser(id)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: "failed to remove the user" });
      });
});

router.delete('/:id/paths/:pathid', validateUserId, (req,res) => {
  const id = req.params.id;
  const pathId = req.params.pathid;
  console.log('id', id, 'pathId', pathId);
  
  Users.findPaths(id)
  .then(paths => {
    if (paths.length) {
      Paths.deletePath(pathId)
        .then(count => {
          res.status(200).json(count);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ error: "failed to delete the user's post" });
        });
    } else {
      res.status(404).json({ message: 'Could not find paths for given user' })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get the paths' });
  });
});

router.put('/:id/paths/:pathid', validateUserId, (req,res) => {
  const id = req.params.id;
  const pathId = req.params.pathid;
  const changes = req.body;
  console.log('changes', changes);
  console.log('id', id, 'pathId', pathId);
  
  Users.findPaths(id)
  .then(paths => {
    if (paths.length) {
      Paths.updatePath(changes, pathId)
        .then(updated => {
          console.log('updated', updated);
          
          res.status(200).json(changes);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ error: "failed to update the user's post" });
        });
    } else {
      res.status(404).json({ message: 'Could not find paths for given user post' })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get the paths' });
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

function validateInput(req, res, next) {
  if( Object.keys(req.body).length == 0 ) {
    res.status(400).json({ message: "missing required fields" });
  } else if(!req.body.title) {
    res.status(400).json({ message: "missing required title field" });
  } else if(!req.body.body) {
    res.status(400).json({ message: "missing required body field" });
  } else next();
}

module.exports = router;