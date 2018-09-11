var express = require("express");
var router = express.Router();

// Importing the model to use its database functions
var burger = require("../models/burger.js");


//Get All route- displays home page and retrieves all data from cats table

    router.get("/", function(req, res){
        burger.all(function(data){
            res.render("index",{burgers: data});
    });
});

    router.put('/',function(req,res){
        burger.devour('devoured', 1, 'id', req.body.id, function(data){
        res.redirect('/');
    });
});

    router.post('/',function(req,res){
        burger.new('burger_name', req.body.burger, function(data){
         res.redirect('/');
         console.log(req.body.burger);
    });
});



module.exports = router;
