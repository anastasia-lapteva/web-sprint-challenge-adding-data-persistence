const resources = [
    { resource_name: "paper", resource_description: "a single sheet of 8.5 x 11 printer paper" },
    { resource_name: "scissors", resource_description: "a pair of scissors" },
    { resource_name: "ruler", resource_description: "a tool used to draw straight lines" },
    { resource_name: "double stick tape", resource_description: "a pressure-sensitive adhesive exposed on both sides" }
];

exports.resources = resources;

exports.seed = function (knex, Promise)
{
    return knex('resources').truncate()
        .then(function ()
        {
            return knex('resources').insert(resources);
        });
};