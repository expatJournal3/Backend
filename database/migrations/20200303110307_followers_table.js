
exports.up = function(knex) {
    return knex.schema.createTable('followers', tbl => {
        tbl.increments();
          
        tbl
        .string('email', 255)
        .notNullable()
        .unique()
        .index();

      // Foreign Keys
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('followers');
};
