const db = require('../../data/dbConfig.js');

async function getAll()
{
    const resources = await db('resources')
        .select('resource_id', 'resource_name', 'resource_description');

    return resources;
}

async function get(resource_id)
{
    const resource = await db('resources')
        .select('resource_id', 'resource_name', 'resource_description')
        .where('resource_id', resource_id);

    return resource;
}

async function getName(resource_id)
{
    const resource = await db('resources')
        .select('resource_name')
        .where('resource_id', resource_id)
        .first();

    return resource;
}

async function exists(name)
{
    const resources = await db('resources')
        .where('resource_name', name);

    return resources.length > 0;
}

function add(resource)
{
    return db('resources')
        .insert(resource)
        .then(([resource_id]) =>
        {
            return getName(resource_id);
        });
}

module.exports =
{
    getAll,
    get,
    getName,
    exists,
    add
};