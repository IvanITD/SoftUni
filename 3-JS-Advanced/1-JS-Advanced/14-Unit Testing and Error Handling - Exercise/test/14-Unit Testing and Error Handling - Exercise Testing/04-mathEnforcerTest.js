const { expect } = require('chai');
const { mathEnforcer } = require('../../04-Math Enforcer/mathEnforcer');

describe('04-Math Enforcer', () => {
    describe('Add Five', () => {
        it('returns undefined for a string', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });

        it('adds 5 to a positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('adds 5 to a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('adds 5 to a decimal', () => {
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
        });
    });

    describe('Subtract Ten', () => {
        it('returns undefined for a string', () => {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });

        it('subtracts 10 from a positive number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        
        it('subtracts 10 from a negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });

        it('subtracts 10 from a decimal', () => {
            expect(mathEnforcer.subtractTen(10.2)).to.be.closeTo(0.2, 0.01);
        });
    });

    describe('Sum', () => {
        it('returns undefined when the first argument is a string', () => {
            expect(mathEnforcer.sum('1', 2)).to.equal(undefined);
        });

        it('returns undefined when the second argument is a string', () => {
            expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
        });

        it('adds two positive numbers', () => {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        });

        it('adds two decimals', () => {
            expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
        });
    });
});