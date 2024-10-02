// 1-calcultest
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.9, 3, 'SUM'), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5, 'SUM'), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'SUM'), 6)
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(2.499999, 3.499999, 'SUM'), 5);
    });
});
describe('SUBTRACT', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1, 3, 'SUBTRACT'), -2);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.9, 3, 'SUBTRACT'), -1);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5, 'SUBTRACT'), -3);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'SUBTRACT'), -2)
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(2.499999, 3.499999, 'SUBTRACT'), -1);
    });
});
describe('DIVIDE', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1, 3, 'DIVIDE'), 1 / 3);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(2.9, 3, 'DIVIDE'), 1);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(8.4, 3.5, 'DIVIDE'), 8 / 4);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'DIVIDE'), 2 / 4)
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(2.499999, 3.499999, 'DIVIDE'), 2 / 3);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(5, 0, 'DIVIDE'), 'Error');
      });
});
