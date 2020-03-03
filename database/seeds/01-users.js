const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('password', 10);
const password = hash;

exports.seed = function(knex) {
  // Resets the IDs of ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'email@email.com', password: password }
      ]);
    });
};
