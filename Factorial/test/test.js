
//Unit testing with mocha and chai
const chai = require('chai');
const factorial = require('../app');


const { assert } = chai;

// eslint-disable-next-line no-undef
describe('Factorial', function() {
    // eslint-disable-next-line no-undef
    it('Factorial of 0 should be 1', function() {
      assert.equal(factorial(0), 1);
    });
    // eslint-disable-next-line no-undef
    it('Factorial of 1 should be 1', function() {
      assert.equal(factorial(1), 1);
    });
    // eslint-disable-next-line no-undef
    it('Factorial of 3 should be 6', function() {
      assert.equal(factorial(3), 6);
    });

    // eslint-disable-next-line no-undef
    it('Factorial of 3 should be 6', function() {
      assert.equal(factorial(11), 39916800);
    });
  });