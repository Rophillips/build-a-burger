// Import (require) connection.js into orm.js
const connection = require("../config/connection.js");


// Helper function for SQL syntax.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
     var arr = [];
  
        for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
     return arr.toString();
       }

  

  
// Create the methods that will execute the necessary MySQL commands in the controllers. 
// Methods needed in order to retrieve and store data in db
var orm = {
    // selectAll()
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


// function to insert table entry
// insertOne()
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
            throw err;
        }
        cb(result);
    });

  },
  // Function to update table entry
  // updateOne()
  updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
  }


}







// Export the orm object for the model
module.exports = orm;


