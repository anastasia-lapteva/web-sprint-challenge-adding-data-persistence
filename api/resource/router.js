const express = require('express');

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

module.exports = router;