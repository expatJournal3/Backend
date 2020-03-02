
exports.up = function(knex) {
    return knex.schema.createTable('paths', tbl => {
        tbl.primary('user_id');
  
        tbl.string('paths', 255)
            .unique()
            .notNullable();

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
    return knex.schema.dropTableIfExists('paths');
};
