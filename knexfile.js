// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/debtcal",
    migrations: {
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  },
  
};
