const { addSubtract } = require('../../07-Add_Subtract/addSubtract');
const { expect } = require('chai');

describe('07-Add / Subtract', () => {
    it('returns add, subtract and get', () => {
        const calc = addSubtract();
        expect(typeof calc.add).to.equal('function');
        expect(typeof calc.subtract).to.equal('function');
        expect(typeof calc.get).to.equal('function');
    });

    it('starts at 0', () => {
        const calc = addSubtract();
        expect(calc.get()).to.equal(0);
    });

    it('adds a number', () => {
        const calc = addSubtract();
        calc.add(5);
        expect(calc.get()).to.equal(5);
    });

    it('subtracts a number', () => {
        const calc = addSubtract();
        calc.add(5);
        calc.subtract(2);
        expect(calc.get()).to.equal(3);
    });

    it('adds a numeric string', () => {
        const calc = addSubtract();
        calc.add('5');
        expect(calc.get()).to.equal(5);
    });

    it('subtracts a numeric string', () => {
        const calc = addSubtract();
        calc.subtract('2');
        expect(calc.get()).to.equal(-2);
    });

    it('keeps the sum internal', () => {
        const calc = addSubtract();
        calc.add(5);
        calc.value = 10;
        expect(calc.get()).to.equal(5);
    });

    it('does not share state between calculators', () => {
        const first = addSubtract();
        const second = addSubtract();
        first.add(5);
        expect(second.get()).to.equal(0);
    });
});