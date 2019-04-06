// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const table = "burgers"

var burger = {
  all: function(cb) {
    orm.all(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(table, objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
