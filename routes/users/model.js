const db = require('../../database/connection');

module.exports = {
    add,
    find,
    findById
};

async function add(user) {
    return db('users').insert(user, 'id');
}

function find() {
    return db('users').select('id', 'username', 'password');
}

function findById() {
    return db('users')
        .where({ id })
        .first();
}