require('dotenv').config({ path: '../../config/.env'});

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../../auth/router.js');
const usersRouter = require('../users/router.js');
const pathsRouter = require('../paths/router.js');
const restricted = require('../../auth/restricted.js');

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/paths', restricted, pathsRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
})

module.exports = server;