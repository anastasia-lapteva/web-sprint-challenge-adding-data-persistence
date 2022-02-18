const db = require('../../data/dbConfig.js');

async function getAll()
{
    const projects = await db('projects')
        .select('project_name', 'project_description', 'project_completed');

    return projects;
}

async function get(project_id)
{
    const project = await db('projects')
        .select('project_id', 'project_name', 'project_description', 'project_completed')
        .where('project_id', project_id);

    return project;
}

function findByProjectName(project_name)
{
    return db("projects")
        .select("project_id", "project_name")
        .where("project_name", project_name)
        .first();
}

function findByProjectId(project_id)
{
    return db("projects")
        .select("project_id", "project_name")
        .where("project_id", project_id)
        .first();
}

function add(project)
{
    return db('projects')
        .insert(project)
        .then(([project_id]) =>
        {
            return get(project_id);
        });
}

module.exports =
{
    getAll,
    get,
    findByProjectName,
    findByProjectId,
    add
};