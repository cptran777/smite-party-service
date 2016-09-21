let expect = require('chai').expect;
let request = require('request');
let bodyparser = require('body-parser');

let randomizer = require('../randomizer');

/************************************************************/
// Mocha doesn't have a way to designate pending before blocks.
// Mimic the behavior of xit and xdescribe with xbeforeEach.
/************************************************************/
let xbeforeEach = function() {};
/************************************************************/


describe('', () => {

  beforeEach(() => {
  });

  describe('Base API request', () => {
    it('Reads the request body', (done) => {
      let options = {
        uri: 'http://127.0.0.1:8000/api',
        json: {
          party: ['Charlie', 'Brent', 'Kevin']
        }
      };
      request(options, function(error, res, body) {
        console.log('Request body: ', body);
      });
    });
  });

  describe('Randomizer', () => {

    let party = ['Charlie', 'Matt', 'Brent'];
    let roles = ['Guardian', 'Hunter', 'Mage'];
    let randomizedResult = randomizer(party, roles);

    xbeforeEach((done) => {
    });

    it('Returns an object with the players input as properties of said object', (done) => {

      for (let x = 0; x < party.length; x++) {
        expect(randomizedResult).to.have.property(party[x]);
      }

      done();
    });

    it('Returns an object where each player is assigned a role and all roles are assigned', (done) => {

      let randomRoles = [];

      for (let player in randomizedResult) {
        randomRoles.push(randomizedResult[player]);
      }

      expect(randomRoles.length).to.equal(roles.length);
      for (let x = 0; x < roles.length; x++) {
        expect(randomRoles).to.contain(roles[x]);
      }

      done();
    });

    describe('Inner test', () => {

      it('Does something else', (done) => {
        // Async function() {
          done();
        // }
      });

    }); 

  });

});