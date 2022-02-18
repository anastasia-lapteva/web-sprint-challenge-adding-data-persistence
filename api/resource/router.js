const express = require('express');
const { checkResourceNameUnique } = require('./middleware.js');
const Resources = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) =>
{
    Resources.getAll()
        .then(resources =>
        {
            res.json(resources);
        })
        .catch(next);
});

router.get('/:id', (req, res, next) =>
{
    const { id } = req.params;

    Resources.get(id)
        .then(resource =>
        {
            res.status(200).json(resource);
        })
        .catch(error =>
        {
            next(error);
        });
});

router.post('/', checkResourceNameUnique, (req, res, next) =>
{
    const resource = req.body;

    Resources.add(resource)
        .then(resource =>
        {
            res.status(201).json(resource);
        })
        .catch(next);
});

module.exports = router;