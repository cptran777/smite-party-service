let expect = require('chai').expect;
let request = require('request');

let randomizer = require('../randomizer');

/************************************************************/
// Mocha doesn't have a way to designate pending before blocks.
// Mimic the behavior of xit and xdescribe with xbeforeEach.
// Remove the 'x' from beforeEach block when working on
// authentication tests.
/************************************************************/
let xbeforeEach = function() {};
/************************************************************/


describe('', () => {

  beforeEach(() => {
  });

  describe('Randomizer', () => {

    xbeforeEach((done) => {
    });

    it('Returns an object with the players input as properties of said object', (done) => {
      let party = ['Charlie', 'Matt', 'Brent'];
      let roles = ['Guardian', 'Hunter', 'Mage'];
      expect(randomizer(party, roles)).to.deep.equal({ Charlie: true, Matt: true, Brent: true });
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