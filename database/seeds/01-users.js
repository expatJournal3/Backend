
exports.seed = function(knex) {
  // Resets the IDs of ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'email@email.com', password: 'password' },
        { email: 'email@gmail.com', password: 'password' },
        { email: 'test@email.com', password: 'password' },
        { email: 'test@gmail.com', password: 'password' },
        { email: 'email@yahoo.com', password: 'password' },
        { email: 'test@yahoo.com', password: 'password' }
      ]);
    });
};
