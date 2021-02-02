exports.up = knex => knex.schema.createTable('owner', table => {
  table
    .uuid("id", 36)
    .primary()
    .defaultTo(knex.raw("uuid_generate_v4()"));
  table
    .uuid("customer_id", 36)
    .references("id")
    .inTable("customers")
    .onDelete("CASCADE");
  table.string("first_name");
  table.string("last_name");
  table.string("email");
  table.string("phone");
  table.string("password").notNullable();
  table.json("account");
  table.timestamps(true, true);
});
  
exports.down = knex => knex.schema.dropTable("users");
