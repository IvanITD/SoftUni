const { expect } = require('chai');
const { checkForSymmetry } = require('../../05-Check for Symmetry/checkForSymmetry') ;

describe('05-Check for Symmetry', () => {
    it('returns true for a symmetric numeric array', () => {
        expect(checkForSymmetry([1, 2, 2, 1])).to.equal(true);
    });
    it('returns false for a non-symmetric array', () => {
        expect(checkForSymmetry([1, 2, 3])).to.equal(false);
    });
    it('returns false if the argument is not an array', () => {
        expect(checkForSymmetry(5)).to.equal(false);
        expect(checkForSymmetry('abba')).to.equal(false);
    });
    it('returns true for an odd-length symmetric array', () => {
        expect(checkForSymmetry([1, 2, 1])).to.equal(true);
    });
    it('returns true for an empty array', () => {
        expect(checkForSymmetry([])).to.equal(true);
    });
    it('returns true for one element', () => {
        expect(checkForSymmetry([5])).to.equal(true);
    });
    it('returns true for a symmetric array of strings', () => {
        expect(checkForSymmetry(['a', 'b', 'b', 'a'])).to.equal(true);
    });
    it('returns false when types differ (1 vs "1")', () => {
        expect(checkForSymmetry([1, 2, '1'])).to.equal(false);
    });
});