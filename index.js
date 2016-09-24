'use strict'
/******************* INIT DEPENDENCIES *********************/

let express = require('express');
let bodyparser = require('body-parser');

let app = express();

/***************** INIT CUSTOM MODULES *********************/

let randomizer = require('./randomizer');
let pseudoDb = require('./store');

let gods = pseudoDb.sortByRoles;
let thumbnails = pseudoDb.images.thumbnails;

/******************* INIT MIDDLEWARE ***********************/

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyparser.json());

/********************* INIT ROUTES *************************/

app.get('/', (req, res) => {
  res.send('This is a service for Smite Party');
});

app.get('/api', (req, res) => {

  let players, roles;
  if (req.body.players) {
  	players = req.body.players;
  	roles = req.body.roles;
  } else {
  	// Default values
  	players = ['Charlie', 'Brent', 'Matt', 'Kevin', 'Andrew'];
  	roles = ['carry', 'jungler', 'support', 'mid', 'solo'];
  }

  // User randomizer module to make assignments to people
  let assignments = randomizer(players, roles, gods);

  // Add images to their god assignments
  for (let person in assignments) {
    assignments[person][1].images = {
      thumbnail: thumbnails[assignments[person][1].name]
    }
  }

  res.send(assignments);
});

/********************* INIT SERVER *************************/

let port = process.env.PORT || 8000;
let server = app.listen(port, ()=>{
  console.log('Listening on port', port);
});