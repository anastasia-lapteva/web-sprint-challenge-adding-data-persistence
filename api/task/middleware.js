const Project = require('../project/model.js');

function checkTaskData(req, res, next)
{
    if (!req.body.task_description || req.body.task_description == "" || !req.body.project_id || req.body.project_id == "")
    {
        next({ status: 400, message: 'task_description and project_id required' });
    }
    else
    {
        next();
    }
}

async function checkProjectId(req, res, next)
{
    try 
    {
        const project_id = req.body.project_id;
        const project = await Project.findByProjectId(project_id);

        if (project)
        {
            next();
        }
        else
        {
            next({ status: 400, message: `Project Id ${req.body.project_id} does not exist` });
        }
    }
    catch (err)
    {
        next(err);
    }
}

module.exports =
{
    checkTaskData,
    checkProjectId
};