/******************* INIT DEPENDENCIES *********************/

let express = require('express');
let bodyparser = require('body-parser');

let app = express();

/***************** INIT CUSTOM MODULES *********************/

let randomizer = require('./randomizer');
let gods = require('./store');

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
  res.send(randomizer(['Charlie', 'Brent', 'Matt', 'Kevin', 'Andrew'], ['carry', 'jungler', 'support', 'mid', 'solo'], gods));
});

/********************* INIT SERVER *************************/

let port = process.env.PORT || 8000;
let server = app.listen(port, ()=>{
  console.log('Listening on port', port);
});