const { expect } = require('chai');
const { playingCards } = require('../../02-Playing Cards/playingCards');

describe('02-Playing Cards', () => {
    it('should return the correct card', () => {
        expect(playingCards('A', 'S').toString()).to.equal('A♠');
    });

    it('should return the correct card', () => {
        expect(playingCards('10', 'H').toString()).to.equal('10♥');
    });

    it('throws for an invalid face', () => {
        expect(() => playingCards('1', 'C')).to.throw('Error');
    });
});