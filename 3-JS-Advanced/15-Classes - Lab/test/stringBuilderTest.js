const { expect } = require('chai');
const { StringBuilder } = require('../06-String Builder/stringBuilder');

describe('06-String Builder', () => {
    it('is a class and has the required methods', () => {
        const builder = new StringBuilder();

        expect(builder).to.be.instanceOf(StringBuilder);
        expect(typeof builder.append).to.equal('function');
        expect(typeof builder.prepend).to.equal('function');
        expect(typeof builder.insertAt).to.equal('function');
        expect(typeof builder.remove).to.equal('function');
        expect(typeof builder.toString).to.equal('function');
    });

    it('creates an empty builder when no argument is passed', () => {
        expect(new StringBuilder().toString()).to.equal('');
    });

    it('stores the string passed to the constructor', () => {
        expect(new StringBuilder('hello').toString()).to.equal('hello');
    });

    it('throws when the constructor receives a non-string', () => {
        expect(() => new StringBuilder(1)).to.throw(TypeError, 'Argument must be a string');
    });

    it('appends a string', () => {
        const builder = new StringBuilder('hello');
        builder.append(', there');
        expect(builder.toString()).to.equal('hello, there');
    });

    it('throws when append receives a non-string', () => {
        const builder = new StringBuilder('hello');
        expect(() => builder.append(1)).to.throw(TypeError, 'Argument must be a string');
    });

    it('prepends a string', () => {
        const builder = new StringBuilder('hello');
        builder.prepend('User, ');
        expect(builder.toString()).to.equal('User, hello');
    });

    it('throws when prepend receives a non-string', () => {
        const builder = new StringBuilder('hello');
        expect(() => builder.prepend(1)).to.throw(TypeError, 'Argument must be a string');
    });

    it('inserts a string at the given index', () => {
        const builder = new StringBuilder('hello');
        builder.insertAt('XX', 2);
        expect(builder.toString()).to.equal('heXXllo');
    });

    it('throws when insertAt receives a non-string', () => {
        const builder = new StringBuilder('hello');
        expect(() => builder.insertAt(1, 0)).to.throw(TypeError, 'Argument must be a string');
    });

    it('removes characters from the given index', () => {
        const builder = new StringBuilder('hello');
        builder.remove(1, 2);
        expect(builder.toString()).to.equal('hlo');
    });

    it('follows the sample operations', () => {
        const builder = new StringBuilder('hello');
        builder.append(', there');
        builder.prepend('User, ');
        builder.insertAt('woop', 5);
        expect(builder.toString()).to.equal('User,woop hello, there');

        builder.remove(6, 3);
        expect(builder.toString()).to.equal('User,w hello, there');
    });
});