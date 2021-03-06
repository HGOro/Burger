// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
//var orm = require("../config/orm");


//var table = "burgers"

var burger = { 
  //selectAll: function(cb) {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //insertOne: function(cols, vals, cb) {
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //updateOne: function(objColVals, condition, cb) {
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
  //XXXYOUTUBE
  //deleteOne: function(objColVals, condition, cb) {
  //  orm.update("burgers", objColVals, condition, function(res) {
  //    cb(res);
  //  });
  //}
  //XXXXXXXX

};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
