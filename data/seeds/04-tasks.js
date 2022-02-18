const tasks = [
    { task_description: "Fold the paper in half vertically", project_id: 1 },
    { task_description: "Unfold the paper and fold each of the top corners into the center line", project_id: 1 },
    { task_description: "Fold the top edges into the center line", project_id: 1 },
    { task_description: "Fold the plane in half toward you", project_id: 1 },
    { task_description: "Fold the wings down, matching the top edges up with the bottom edge of the body", project_id: 1 },
    { task_description: "Add double stick tape to the inside of the body", task_notes: "optional", project_id: 1 }
];

exports.tasks = tasks;

exports.seed = function (knex, Promise)
{
    return knex('tasks').truncate()
        .then(function ()
        {
            return knex('tasks').insert(tasks);
        });
};