exports.up = knex => knex.schema.createTable('users', table => {
  table
    .uuid("id", 36)
    .primary()
    .defaultTo(knex.raw("uuid_generate_v4()"));
  table.string("first_name");
  table.string("last_name");
  table.string("email");
  table.string("phone");
  table.string("password");
});

exports.down = knex => knex.schema.dropTable("users");
