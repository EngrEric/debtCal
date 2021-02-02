const knex = require('../knex');

module.exports = {
  getAll(){
    return knex('users');
  },

  getUser (id){
    return knex('users').where('id', id).first();
  }
};
