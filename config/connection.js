// set up code to connect Node to Mysql
var mysql = require("mysql");

//var connection = mysql.createConnection(process.env.JAWSDB_URL);

console.log(process.env.DB_NAME)
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_HOST,
    password: process.env.DB_HOST,
    database: process.env.DB_HOST,
});

//  make the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection to ORM
module.exports = connection;