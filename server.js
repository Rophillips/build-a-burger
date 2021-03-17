const express = require("express");

//const orm = require("./config/orm");

// Set handlebars
// var exphbs = require("express-handlebars");
//  app.engine("handlebars", exphbs({ defaultLayout: "main"}));
//  app.set("view engine", "handlebars");


var PORT = process.env.PORT || 8080;

const app = express();
// Serve static content for the app from public directory
app.use(express.static("public"));

// Import routes and give server access to them
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);









// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });