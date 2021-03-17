// Inside the burgers_controller.js file, import the following:

// Express
 var express = require("express");

 var router = express.Router();

// // burger.js to import model to use db functions
 var burger = require("../models/burger.js");

 router.get("/", function(req, res) {
     burger.selectAll(response => {
        res.render("index",{ burgers: response});
        console.log(response);
     }) 
     
 })

 router.post("/api/burgers", function (req,res) {
     burger.insertOne(
         ["burger_name", "devoured"],
         [req.body.burger_name, req.body.devoured],
         function (result) {

            res.json({ id: result.insertId});
         }
     )
 })
//  router.put("/api/burgers/:id", function (req,res){
//      let id = (req.params.id);
//      burger.updateOne(
//          {devoured: "true"},
//          `id = ${id}`

//      )
//  })














// Create the router for the app, and export the router at the end of your file.
module.exports = router;