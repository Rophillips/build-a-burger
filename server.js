const express = require("express");

const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

const app = express();











// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });