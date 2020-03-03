const db = require('../../database/connection');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findPaths,
    addPath,
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

function findPaths(id) {
    return db('paths')
        .join('users', 'users.id', 'paths.user_id')
        .select('paths.*')
        .where('user_id', id);
    }
    
function addPath(path) {
    return db('paths')
    .join('users', 'users.id', 'paths.user_id')
    .insert(path, 'id');
}
    
function deleteUser(id) {
    return db('users')
        .where({ id })
        .del();
}