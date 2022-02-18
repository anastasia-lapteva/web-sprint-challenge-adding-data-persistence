const Project = require('./model.js');

async function checkProjectNameExists(req, res, next)
{
    try
    {
        const project_name = req.body.project_name;
        const project = await Project.findByProjectName(project_name);

        if (!project)
        {
            next();
        }
        else
        {
            next({ status: 400, message: "project_name already exists" });
        }
    }
    catch (err)
    {
        next(err);
    }
}

function checkProjectData(req, res, next)
{
    if (!req.body.project_name || !req.body.project_name.trim())
    {
        next({ status: 400, message: 'project_name required' });
    }
    else
    {
        req.body.project_name = req.body.project_name.trim();
        next();
    }
}

module.exports =
{
    checkProjectNameExists,
    checkProjectData
};