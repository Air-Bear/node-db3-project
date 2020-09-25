const db = require("../data/dbConfig.js");

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({id}).first();
}

function findSteps(id) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where({ scheme_id: id })
        .orderBy("steps.step_number", "asc");
}

function addStep() {
    return db("schemes")
}

function add(data) {
    return db("schemes").insert(data)
}

function update(data, id) {
    return db("schemes").update(data).where({id})
}

function remove(id) {
    return db("schemes").where({id}).del()
}

module.exports = {
    find,
    findById,
    findSteps,
    addStep,
    add,
    update,
    remove
}