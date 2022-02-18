const router = require('express').Router();
const Projects = require('./model.js');

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

module.exports = router;