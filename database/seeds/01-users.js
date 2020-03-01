
exports.seed = function(knex) {
  // Resets the IDs of ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'email@email.com', password: 'password' }
      ]);
    });
};
