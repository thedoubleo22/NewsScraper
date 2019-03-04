var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./controllers/routes.js")

// Require all models
var db = require("./models");

var PORT = 3000;

var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/NYTScraper", { useNewUrlParser: true });


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
