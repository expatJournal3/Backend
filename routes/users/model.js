const db = require('../../database/connection');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByEmail,
    findPaths,
    findFollowers,
    addPath,
    addFollower,
    deletePath,
    updatePath,
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

function findByEmail(email) {
    return db('users')
        .where({ email })
        .first();
}

function findPaths(id) {
    return db('paths')
        .join('users', 'users.id', 'paths.user_id')
        .select('paths.*')
        .where('user_id', id);
}

function findFollowers(id) {
    return db('followers')
        .join('users', 'users.id', 'followers.user_id')
        .select('followers.*')
        .where('user_id', id);
}
    
function addPath(path) {
    return db('paths')
    .join('users', 'users.id', 'paths.user_id')
    .insert(path, 'id');
}

function addFollower(follower) {
    console.log('follower from model.js', follower);
    return db('followers')
    .join('users', 'users.id', 'followers.user_id')
    .insert(follower, 'id');
}

function updatePath(changes, id) {
    return db('paths')
      .where({ id })
      .update(changes);
}

function deletePath(pathId) {
    return db('paths')
      .where({ pathId })
      .del();
}
    
function deleteUser(id) {
    return db('users')
        .where({ id })
        .del();
}