const { expect } = require('chai');
const { deckOfCards } = require('../../03-Deck of Cards/deckOfCards');

describe('03-Deck of Cards', () => {
    it ('should return the correct deck of cards', () => {
        let printed = '';
        const originalLog = console.log;
        console.log = (message) => {
            printed += message;
        };

        deckOfCards(['AS', '10D', 'KH', '2C']);

        console.log = originalLog;
        expect(printed).to.equal('A♠ 10♦ K♥ 2♣');
    });

    it ('should return the correct deck of cards', () => {
        let printed = '';
        const originalLog = console.log;
        console.log = (message) => {
            printed = message;
        };

        deckOfCards(['5S', '3D', 'QD', '1C']);

        console.log = originalLog;
        expect(printed).to.equal('Invalid card: 1C');
    });
});