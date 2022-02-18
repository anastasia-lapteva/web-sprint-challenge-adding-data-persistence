const projects = [
    { project_name: "Paper Airplane DIY", project_description: "How to Make a Paper Airplane" }
];

exports.projects = projects;

exports.seed = function (knex, Promise)
{
    return knex('projects').truncate()
        .then(function ()
        {
            return knex('projects').insert(projects);
        });
};