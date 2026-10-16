const { expect } = require('chai');
const { evenOrOdd } = require('../../02-Even or Odd/evenOrOdd');

describe('02-Even or Odd', () => {
    it('returns undefined for a number', () => {
        expect(evenOrOdd(1)).to.equal(undefined);
    });
    it('returns undefined for an object', () => {
        expect(evenOrOdd({})).to.equal(undefined);
    });
    it('returns even for a string with even length', () => {
        expect(evenOrOdd('ab')).to.equal('even');
    });
    it('returns odd for a string with odd length', () => {
        expect(evenOrOdd('abc')).to.equal('odd');
    });
    it('returns even for an empty string', () => {
        expect(evenOrOdd('')).to.equal('even');
    });
    it('works for different strings in a row', () => {
        expect(evenOrOdd('hi')).to.equal('even');
        expect(evenOrOdd('hello')).to.equal('odd');
        expect(evenOrOdd('test')).to.equal('even');
    });
});