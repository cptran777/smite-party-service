var expect = require('chai').expect;
var request = require('request');

var randomizer = require('../randomizer');

/************************************************************/
// Mocha doesn't have a way to designate pending before blocks.
// Mimic the behavior of xit and xdescribe with xbeforeEach.
// Remove the 'x' from beforeEach block when working on
// authentication tests.
/************************************************************/
var xbeforeEach = function() {};
/************************************************************/


describe('', function() {

  beforeEach(function() {
  });

  describe('Randomizer', function() {

    xbeforeEach(function(done) {
    });

    it('Does something', function(done) {
      var party = ['Charlie', 'Matt', 'Brent'];
      var roles = ['Guardian', 'Hunter', 'Mage'];
      expect(typeof randomizer(party, roles).players).to.equal('object');
      done();
    });

    describe('Inner test', function() {

      it('Does something else', function(done) {
        // Async function() {
          done();
        // }
      });

    }); 

  });

});