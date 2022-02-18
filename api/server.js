const express = require('express');

const ProjectRouter = require('./project/router.js');

const jsonErrorHandler = async (err, req, res, next) =>
{
    res.header("Content-Type", 'application/json');

    res.status(err.status).send(JSON.stringify(err));
};

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use(jsonErrorHandler);

module.exports = server;