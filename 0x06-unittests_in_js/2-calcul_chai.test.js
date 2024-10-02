const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('check', () => {
  describe('sUM', () => {
    it('should return 4', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5', () => {
      expect(calculateNumber('SUM', 1.9, 3)).to.equal(5);
    });
    it('should return 5', () => {
      expect(calculateNumber('SUM', 2.0, 3.0)).to.equal(5);
    });
    it('should return 5', () => {
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
    });
    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
    });
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });
    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });
    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return 0', () => {
      expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    });
    it('should return 4', () => {
      expect(calculateNumber('SUBTRACT', 2, -2)).to.equal(4);
    });
    it('should return 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
    it('should return -1', () => {
      expect(calculateNumber('SUBTRACT', 1.9, 3)).to.equal(-1);
    });
    it('should return -3', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 3.5)).to.equal(-3);
    });
    it('should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
    });
  });

  describe('dIVIDE', () => {
    it('should return 1/3', () => {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(1 / 3);
    });
    it('should return Error for negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });
    it('should return Error for negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });
    it('should return Error for 0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
    it('should return -0 for 0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });
    it('should return Error for positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });
    it('should return Error for positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });
    it('should return 1 for 2.9 and 3', () => {
      expect(calculateNumber('DIVIDE', 2.9, 3)).to.equal(1);
    });
    it('should return 8 / 4', () => {
      expect(calculateNumber('DIVIDE', 8.4, 3.5)).to.equal(8 / 4);
    });
    it('should return 2 / 4', () => {
      expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(2 / 4);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('DIVIDE', 2.499999, 3.499999)).to.equal(2 / 3);
    });
    it('should return Error for division by zero', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
  });
});
