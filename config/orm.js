//this page sets up our SQL orm handling of requests
    // NEEDS to include:        
    // * `selectAll()`
    // * `insertOne()`
    // * `updateOne()`

//IMPORTS
var connection = require ('./connection.js');


// These are the methods you will need to use in order to retrieve and store data in your database:
var orm = {
    selectAll: function(tableName, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString,[tableName], function(err, result) {
          cb(result);
      });
    },

    insertOne: function(tableName, objCol, objData, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES (?);";
      // console.log("orm.js:orm.insertOne: " + queryString);
      connection.query(queryString, [tableName, objCol, objData], function(err, result) {
        cb(result);
      });
    },

    updateOne: function(tableName, objCol, objData, conditionCol, conditionData, cb) {
      //update one entry - need name of col being updated, new value, id of entry for WHERE clause
      //TODO- make sure the function that prints all the results stores the entry ids where they can be accessed for this function, probably in data-id="" in html
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
      connection.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(err, result) {
        cb(result);
      });

    }
  };


//exports
module.exports = orm;
    