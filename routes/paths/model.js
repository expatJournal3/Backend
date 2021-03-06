const db = require('../../database/connection');

module.exports = {
    add,
    find,
    findBy,
    findById,
    updatePath,
    deletePath
};

async function add(path) {
    return db('paths').insert(path, 'id');
}

function find() {
    return db('paths').select('id', 'title', 'body', 'imgUrl', 'timestamp');
}

function findBy(filter) {
    return db('paths').where(filter);
}

function findById(id) {
    return db('paths')
        .where({ id })
        .first();
}

function updatePath(changes, id) {
    return db('paths')
      .where({ id })
      .update(changes);
}

function deletePath(id) {
    return db('paths')
          .where({ id })
          .del();
}