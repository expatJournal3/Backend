const db = require('../../database/connection');

module.exports = {
    add,
    find,
    findBy,
    findById,
    deleteUser
};

async function add(user) {
    return db('users').insert(user, 'id');
}

function find() {
    return db('users').select('id', 'email', 'password');
}

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function deleteUser(id) {
    return db('users')
          .where({ id })
          .del();
}