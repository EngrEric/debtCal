
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.string("phone");
    table.string("password");
  });
};
    
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
     
