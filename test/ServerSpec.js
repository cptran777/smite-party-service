let expect = require('chai').expect;
let request = require('request');

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

    describe('Inner test', () => {

      it('Does something else', (done) => {
        // Async function() {
          done();
        // }
      });

    }); 

  });

});