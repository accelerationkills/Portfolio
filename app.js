var express = require("express");
var app = express();

app.use(express.static(__dirname + '/view'));

app.get('/', function (req, res) {
  res.sendFile('home.html');
});

module.exports = app;
