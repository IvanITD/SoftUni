const { expect } = require('chai');
const { charLookup } = require('../../03-Char Lookup/charLookup');

describe('03-Char Lookup', () => {
    it('returns undefined when the first argument is not a string', () => {
        expect(charLookup(10, 0)).to.equal(undefined);
    });
    it('returns undefined when the index is a string', () => {
        expect(charLookup('hello', '0')).to.equal(undefined);
    });
    it('returns undefined when the index is a decimal', () => {
        expect(charLookup('hello', 1.5)).to.equal(undefined);
    });
    it('returns Incorrect index for a negative index', () => {
        expect(charLookup('hello', -1)).to.equal('Incorrect index');
    });
    it('returns Incorrect index when the index is equal to the length', () => {
        expect(charLookup('hello', 5)).to.equal('Incorrect index');
    });
    it('returns Incorrect index when the index is past the end', () => {
        expect(charLookup('hello', 10)).to.equal('Incorrect index');
    });
    it('returns the character at the given index', () => {
        expect(charLookup('hello', 0)).to.equal('h');
        expect(charLookup('hello', 1)).to.equal('e');
    });
});