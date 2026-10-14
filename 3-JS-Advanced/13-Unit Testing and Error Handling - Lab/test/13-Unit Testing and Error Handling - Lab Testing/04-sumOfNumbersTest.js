const { expect } = require('chai');
const { sumOfNumbers } = require('../../04-Sum of Numbers/sumOfNumbers');

describe('04-Sum of Numbers', () => {
    it('sums numbers in an array', () => {
        expect(sumOfNumbers([1, 2, 3])).to.equal(6);
    });

    it('returns 0 for an empty array', () => {
        expect(sumOfNumbers([])).to.equal(0);
    });

    it('returns the only element', () => {
        expect(sumOfNumbers([5])).to.equal(5);
    });

    it('adds negative numbers', () => {
        expect(sumOfNumbers([-1, 2, 3])).to.equal(4);
    });

    it('converts string numbers', () => {
        expect(sumOfNumbers(['1', '2'])).to.equal(3);
    });

    it('returns NaN for invalid values', () => {
        expect(sumOfNumbers(['pesho', 'gosho'])).to.be.NaN;
    });
});