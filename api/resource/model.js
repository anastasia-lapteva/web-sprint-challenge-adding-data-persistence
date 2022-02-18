const db = require('../../data/dbConfig.js');

async function getAll()
{
    const resources = await db('resources')
        .select('resource_id', 'resource_name', 'resource_description');

    return resources;
}

module.exports =
{
    getAll
};