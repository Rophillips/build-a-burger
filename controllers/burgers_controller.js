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
      }); 
     
  });
// router.get("/", function (req, res) {
//     burger.selectAll(function (data) {
//         var hbsObject = {
//             burgers: data
//         };

//         console.log(hbsObject);
//     });
// });

 router.post("/api/burgers", function (req,res) {
     burger.insertOne(
         ["burger_name", "devoured"],
         [req.body.burger_name, req.body.devoured],
         function (result) {

            res.json({ id: result.insertId});
         }
     );
 });

 router.put("/api/burgers/:id", function (req, res) {
     var condition = "id = " + req.params.id;
     console.log(req.body);
     console.log("condition", condition);
     burger.updateOne( 
         
        {
            devoured: req.body.devoured

        },
        condition,
        function (result) {
            if (result.changedRows == 0) {

                // If no rows were changed, then the ID must not exist
                return res.status(404).end();
            }else {
                res.status(200).end();
            }
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
 router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    //console.log("condition", condition);
    burger.deleteOne(condition, data =>{
        console.log(data);
        res.json(data)
    })
        
    //    {
    //        devoured: req.body.devoured

    //    },
    //    condition,
    //    function (result) {
    //        if (result.changedRows == 0) {

    //            // If no rows were changed, then the ID must not exist
    //            return res.status(404).end();
    //        }else {
    //            res.status(200).end();
    //        }
      // })

    })













// Create the router for the app, and export the router at the end of your file.
module.exports = router;