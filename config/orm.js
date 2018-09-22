//this page sets up our SQL orm handling of requests
    // NEEDS to include:        
    // * `selectAll()`
    // * `insertOne()`
    // * `updateOne()`

//IMPORTS
var connection = require ('./connection.js');


// These are the methods you will need to use in order to retrieve and store data in your database:
var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM "+table+";";
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
      });
    },

    insertOne: function(table, input, cb) {
      var queryString = "INSERT INTO "+table+" (burger_name) VALUE (?);";
      // console.log("orm.js:orm.insertOne: " + queryString);
      connection.query(queryString, [input], function(err, result) {
        if(err) throw err;
        cb(result);
      });
    },

    updateOne: function(table, columnName, inputValue, valueId, cb) {
      //update one entry - need name of col being updated, new value, id of entry for WHERE clause
      //TODO- make sure the function that prints all the results stores the entry ids where they can be accessed for this function, probably in data-id="" in html
      var queryString = "UPDATE "+table+" SET "+columnName+" = "+inputValue;
      queryString += " WHERE id= "+valueId;
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });

    }
  };


//exports
module.exports = orm;
    