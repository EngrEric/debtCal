const knex = require('./knex');
const bookshelf = require("bookshelf")(knex);

const buuid = require("bookshelf-uuid");
const camelcase = require("bookshelf-camelcase");
const scopes = require("bookshelf-scopes");
const modelbase = require("bookshelf-modelbase").pluggable;
const schemabookshelf =   require('bookshelf-schema')();

bookshelf.plugin([
  "registry",
  "virtuals",
  "visibility",
  "pagination",
  camelcase,
  scopes,
  buuid,
  modelbase,
  schemabookshelf,
]);

module.exports = bookshelf;
