var express = require("express");
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('home.pug', 
	{ title: 'Hey' });
});

module.exports = app;
