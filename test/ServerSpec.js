var expect = require('chai').expect;
var request = require('request');

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

  describe('First Test', function() {

    xbeforeEach(function(done) {
    });

    it('Does something', function(done) {
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