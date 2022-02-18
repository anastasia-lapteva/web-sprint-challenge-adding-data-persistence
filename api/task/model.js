const db = require('../../data/dbConfig.js');

async function getAll()
{
    /*
    SELECT 
        t.task_description,
        t.task_notes,
        t.task_completed,
        p.project_name,
        p.project_description
    FROM
        tasks AS t
    JOIN projects AS p
    ORDER BY t.task_description;
    */

    const tasks = await db('tasks AS t')
        .join('projects AS p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_id', 'p.project_name', 'p.project_description');

    return tasks;
}

async function get(project_id)
{
    /*
    SELECT 
        t.task_description,
        t.task_notes,
        t.task_completed,
        p.project_name,
        p.project_description
    FROM
        tasks AS t
    JOIN projects AS p
    WHERE p.project_id = 1;
    */

    const tasks = await db('tasks AS t')
        .join('projects AS p', 't.project_id', 'p.project_id')
        .where('p.project_id', project_id)
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_id');

    return tasks;
}

async function add(task)
{
    const [task_id] = await db('tasks').insert(task);

    const newTask = await db('tasks')
        .where('task_id', task_id)
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_id')
        .first();

    return newTask;
}

module.exports =
{
    getAll,
    get,
    add
};