/******************* INIT DEPENDENCIES *********************/

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

/***************** INIT CUSTOM MODULES *********************/

var randomizer = require('./randomizer');

/******************* INIT MIDDLEWARE ***********************/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyparser.json());

/********************* INIT ROUTES *************************/

app.get('/', function(req, res) {
  res.send('This is a service for Smite Party');
});

app.get('/api', function(req, res) {
  res.send(randomizer(['Charlie', 'Brent', 'Matt', 'Kevin', 'Andrew'], ['Carry', 'Jungler', 'Support']));
});

/********************* INIT SERVER *************************/

var port = process.env.PORT || 8000;
var server = app.listen(port, ()=>{
  console.log('Listening on port', port);
});