const router = require('express').Router();
const Projects = require('./model.js');

const {
    checkProjectNameExists
} = require('./middleware.js');

router.get('/', (req, res, next) =>
{
    Projects.getAll()
        .then(projects =>
        {
            res.json(projects);
        })
        .catch(next);
});

router.get('/:id', (req, res, next) =>
{
    const { id } = req.params;

    Projects.get(id)
        .then(project =>
        {
            res.status(200).json(project);
        })
        .catch(error =>
        {
            next(error);
        });
});

router.post('/', checkProjectNameExists, (req, res, next) =>
{
    const project = req.body;

    Projects.add(project)
        .then(project =>
        {
            res.status(201).json(project);
        })
        .catch(next);
});

module.exports = router;