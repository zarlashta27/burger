var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(process.cwd() + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Referencing route.js
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 8600;

// Start our server so that it can begin listening to client requests.
app.listen(port);


