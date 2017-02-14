var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.sendFile('home.html');
});

module.exports = app;
