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

module.exports =
{
    getAll,
    get
};