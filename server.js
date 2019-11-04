const express = require('express');
const accountsRouter = require('./accounts/accounts-router.js');
const server = express();

// * ROUTES & MIDDLEWARE
server.use(express.json());
server.use('/api/accounts', accountsRouter);

module.exports = server;