const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./users/router.js');

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
})

module.exports = server;