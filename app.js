var express = require("express");
var path = __dirname + '/views/';
var router = express.Router();
var app = express();

app.get('/', function (req, res) {
  res.send('Work in progress. Stay tuned!');
});

module.exports = app;
