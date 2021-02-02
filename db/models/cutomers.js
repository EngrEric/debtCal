const bookshelf = require('../bookshelf');
require('./owner');

const Customer = bookshelf.Model.extend({
  tableName: 'customers',
  uuid: true,
  hasTimestamps: true,

  owners() {
    return this.belongsToMany("Owners");
  }
});
  
module.exports = bookshelf.Model("Customer", Customer);
