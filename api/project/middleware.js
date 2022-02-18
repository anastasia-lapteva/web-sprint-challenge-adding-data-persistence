const Project = require('./model.js');

async function checkProjectNameUnique(req, res, next)
{
    try
    {
        const project_name = req.body.project_name;
        const exists = await Project.findByProjectName(project_name);

        if (!exists)
        {
            next();
        }
        else
        {
            next({ status: 400, message: `Project name ${req.body.project_name} already exists` });
        }
    }
    catch (err)
    {
        next(err);
    }
}

function checkProjectData(req, res, next)
{
    if (!req.body.project_name || !req.body.project_name.trim() || req.body.project_name == "")
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
    checkProjectNameUnique,
    checkProjectData
};