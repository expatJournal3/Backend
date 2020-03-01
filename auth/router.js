const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');

const Users = require('../routes/users/model.js');

// SIGNUP ENDPOINT
router.post('/register', validateUser, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  if (!user.email || !user.password) {
    res.status(400).json({error: "Email and password are required."})
    } else {
        Users.add(user)
        .then(saved => {
            const id = saved[0];
            Users.findBy({ id })
            .first()
            .then(user => {
                const token = generateToken(user);
                const id = user.id;
                res.status(200).json({
                    message: `Welcome! Successful sign up with ${user.email}`,
                    token,
                    id
                });
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: "Error while signing in."})
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "Error while signing up."})
        })
    }
});

// LOGIN ENDPOINT
router.post("/login", validateUser, (req, res) => {
    const { email, password } = req.body;
    Users.findBy({ email })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            const id = user.id;
            res.status(200).json({
                message: `Welcome! Successful login with ${user.email}`,
                token,
                id
            });
        } else {
            res.status(401).json({error: "Invalid credentials."})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: "Error while signing in."})
    })
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email
  };

  const secret = jwtSecret;

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
}
// custom middleware
function validateUser(req, res, next) {
    if( Object.keys(req.body).length == 0 ) {
      res.status(400).json({ message: "missing user data" });
    } else if(!req.body.email) {
      res.status(400).json({ message: "missing required email field" });
    } else if(!req.body.password) {
      res.status(400).json({ message: "missing required password field" });
    } else next();
}

module.exports = router;
