const { expect } = require('chai');
const { solve } = require('../../01-Sub Sum/subSum');

describe('01-Sub Sum', () => {
    it('sums from the start index through the last element when end is past the array', () => {
        expect(solve([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150);
    });

    it('treats a negative start index as zero', () => {
        expect(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.be.closeTo(3.3, 0.01);
    });

    it('returns NaN when an element cannot be converted to a number', () => {
        expect(solve([10, 'twenty', 30, 40], 0, 2)).to.be.NaN;
    });

    it('returns 0 for an empty array', () => {
        expect(solve([], 1, 2)).to.equal(0);
    });

    it('returns NaN when the first argument is not an array', () => {
        expect(solve('text', 0, 2)).to.be.NaN;
    });

    it('returns 0 when the start index is after the end index', () => {
        expect(solve([1, 2, 3], 2, 1)).to.equal(0);
    });
});
