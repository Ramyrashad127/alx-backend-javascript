// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.9, 3), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5), 6)
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
});
