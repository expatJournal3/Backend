
exports.seed = function(knex) {
  // Resets the IDs of ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'email@email.com', password: '$2a$10$2IwJrYQPfyvfjvCR4QhoSOsWH8oApAb9qcYWbK1xECJWEHMc48hMC' },
        { email: 'email@gmail.com', password: '$2a$10$2IwJrYQPfyvfjvCR4QhoSOsWH8oApAb9qcYWbK1xECJWEHMc48hMC' },
        { email: 'test@email.com', password: '$2a$10$EwrvOa8EuX27ppsE6fsdcO85enGHhegFGeLMqGCH7FgOTBALv8mnu' },
        // { email: 'test@gmail.com', password: 'password' },
        // { email: 'email@yahoo.com', password: 'password' },
        // { email: 'test@yahoo.com', password: 'password' }
        {
          "email": "test123@email.com",
          "password": "password"
        }
      ]);
    });
};
