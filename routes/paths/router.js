const Paths = require('./model.js');
const router = require('express').Router();

router.get('/',(req, res) => {
    Paths.find()
        .then(paths => {
            console.log('paths', paths);
            res.json(paths);
        })
        .catch(err => {
            console.log('err', err);
            res.send(err);
        });
});

module.exports = router;