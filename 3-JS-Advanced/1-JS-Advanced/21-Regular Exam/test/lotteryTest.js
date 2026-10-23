const { lottery } = require('../03-Lottery/Lottery');
const { expect } = require('chai');

describe('lottery', () => {
    describe('buyLotteryTicket', () => {
        it('buys tickets when the price, count, and buy flag are valid', () => {
            expect(lottery.buyLotteryTicket(10, 2, true)).to.equal('You bought 2 tickets for 20$.');
            expect(lottery.buyLotteryTicket(10, 1, true)).to.equal('You bought 1 tickets for 10$.');
        });
        it('throws when buy is false, even if the other arguments are also invalid', () => {
            expect(() => lottery.buyLotteryTicket(10, 2, false)).to.throw(Error, 'Unable to buy lottery ticket!');
            expect(() => lottery.buyLotteryTicket(0, 0, false)).to.throw(Error, 'Unable to buy lottery ticket!');
        });
        it('throws for an invalid price, count, or buy flag', () => {
            expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(-5, 1, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 0, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, -1, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket('10', 1, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, '1', true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(10, 1, 'yes')).to.throw(Error, 'Invalid input!');
        });
    });
    describe('checkTicket', () => {
        it('throws unless both arguments are arrays of 6 numbers', () => {
            expect(() => lottery.checkTicket('123456', [1, 2, 3, 4, 5, 6])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], null)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw(Error, 'Invalid input!');
        });
        it('returns the reward message for 3, 4, or 5 matches', () => {
            expect(lottery.checkTicket([1, 2, 3, 10, 11, 12], [1, 2, 3, 4, 5, 6]))
                .to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 12], [1, 2, 3, 4, 5, 6]))
                .to.equal('Congratulations you win, check your reward!');
        });
        it('returns the jackpot message for 6 matches', () => {
            expect(lottery.checkTicket([6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]))
                .to.equal('You win the JACKPOT!!!');
        });
        it('returns undefined for fewer than 3 matches', () => {
            expect(lottery.checkTicket([1, 2, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6])).to.equal(undefined);
        });
        it('counts a repeated ticket number only once', () => {
            expect(lottery.checkTicket([1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6])).to.equal(undefined);
        });
    });
    describe('secondChance', () => {
        it('throws unless the id is a number and the prizes are an array', () => {
            expect(() => lottery.secondChance('1', [1])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance(1, '1')).to.throw(Error, 'Invalid input!');
        });
        it('returns the second-chance prize when the id is included', () => {
            expect(lottery.secondChance(1, [2, 1, 3])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(0, [0])).to.equal('You win our second chance prize!');
        });
        it('returns the losing message when the id is missing', () => {
            expect(lottery.secondChance(4, [1, 2, 3])).to.equal("Sorry, your ticket didn't win!");
            expect(lottery.secondChance(1, [])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});