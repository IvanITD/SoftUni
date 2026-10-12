const { expect } = require('chai');
const { isSymmetric } = require('../05-Check for Symmetry/checkForSymmetry') ;

describe('isSymmetric', () => {
    it('returns true for a symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    });

    it('returns false for a non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.equal(false);
    });

    it('returns false if the argument is not an array', () => {
        expect(isSymmetric(5)).to.equal(false);
        expect(isSymmetric('abba')).to.equal(false);
    });

    it('return true for an odd-length symmetric array', () => {
        expect(isSymmetric([1, 2, 1])).to.equal(true);
    });

    it('returns true for a symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.equal(true);
    });

    it('returns false when types differ (1 vs "1")', () => {
        expect(isSymmetric([1, 2, '1'])).to.equal(false);
    });
});