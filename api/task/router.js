const router = require('express').Router();
const Tasks = require('./model.js');

const {
    checkTaskData,
    checkProjectId
} = require('./middleware.js');

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

router.post('/', checkTaskData, checkProjectId, (req, res, next) =>
{
    const task = req.body;

    Tasks.add(task)
        .then(task =>
        {
            res.status(201).json(task);
        })
        .catch(next);
});

module.exports = router;