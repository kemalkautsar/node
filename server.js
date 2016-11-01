/*
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8000);
*/


//server.js
//load the things we need

var express = require('express');
var app = express();

//set the view engine to ejs
app.set('view engine','ejs');

//use res.render to load ejs view file

//index page
app.get('/',function(req,res){
	res.render('pages/index');
});

//about page
app.get('/about', function(req,res){
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magik port');