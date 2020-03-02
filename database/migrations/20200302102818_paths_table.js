
exports.up = function(knex) {
    return knex.schema.createTable('paths', tbl => {
        tbl.increments();
          
        tbl.string('title', 255)
            .notNullable();
  
        tbl.string('body', 3000)
            .notNullable();
  
        tbl.string('imgUrl', 255);
  
        tbl.string('timestamp', 255);

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
