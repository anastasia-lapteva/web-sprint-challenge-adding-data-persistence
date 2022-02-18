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

module.exports =
{
    checkProjectNameExists
};