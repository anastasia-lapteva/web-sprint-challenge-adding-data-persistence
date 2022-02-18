const express = require('express');
const Tasks = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) =>
{
    Tasks.getAll()
        .then(data =>
        {
            res.json(data);
        })
        .catch(next);
});

router.get('/:project_id', (req, res, next) =>
{
    const { project_id } = req.params;

    Tasks.get(project_id)
        .then(data =>
        {
            res.json(data);
        })
        .catch(next);
});

module.exports = router;