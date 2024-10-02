// 1-calcultest
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('check', () => {
  describe('sUM', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.9, 3), 5);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 3.0), 5);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
    });
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });
    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });
  describe('sUBTRACT', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 1), 0);
    });
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, -2), 4);
    });
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.9, 3), -1);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
    });
    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
    });
  });
  describe('dIVIDE', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 1 / 3);
    });
    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.9, 3), 1);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 3.5), 8 / 4);
    });
    it('should return 6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.5), 2 / 4);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.499999, 3.499999), 2 / 3);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    });
  });
});
