const bookshelf = require('../bookshelf');
require('./cutomers');

const Owner = bookshelf.Model.extend({
  tableName: 'owner',
  uuid: true,
  hasTimestamps: true,

  customers() {
    return this.hasMany("Customers");
  }
});
  
module.exports = bookshelf.Model("Owner", Owner);
