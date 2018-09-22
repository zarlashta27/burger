var express = require("express");
var router = express.Router();

// Importing the model to use its database functions
var burger = require("../models/burger.js");


//Get All route- displays home page and retrieves all data from cats table
    //Route for home page
    router.get("/", function(req, res){
        burger.all(function(data){
    //set table data as an array with key burger
    var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      //render data into index.handlebars
      res.render("index", hbsObject);
    });
  });

     //set up api view in case you want to view all your data
    router.get("/api",function(req,res){
        burger.all( function(data){
        res.json(data);
    });
});

    //post new burger to the table
    router.post('/',function(req,res){
        console.log(req.body.input);
        burger.create(req.body.input, function(){
        res.redirect('/');
    });
});

    //update burgers to devoured
    router.post("/devour/:id", function(req, res) {
        var id = req.params.id;
        console.log(id);
        burger.update("devoured",true, id, function(){
        res.redirect("/");
    });
  });


module.exports = router;
