const { expect } = require('chai');
const { rgbToHex } = require('../../06-RGB to HEX/rgbToHex');

describe('06-RGB to HEX', () => {
    it('converts black', () => {
        expect(rgbToHex(0, 0, 0)).to.equal('#000000');
    });

    it('converts white', () => {
        expect(rgbToHex(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts red', () => {
        expect(rgbToHex(255, 0, 0)).to.equal('#FF0000');
    });

    it('converts green', () => {
        expect(rgbToHex(0, 255, 0)).to.equal('#00FF00');
    });

    it('converts blue', () => {
        expect(rgbToHex(0, 0, 255)).to.equal('#0000FF');
    });

    it('pads values under 16', () => {
        expect(rgbToHex(15, 15, 15)).to.equal('#0F0F0F');
    });

    it('returns undefined when red is below 0', () => {
        expect(rgbToHex(-1, 0, 0)).to.equal(undefined);
    });

    it('returns undefined when green is below 0', () => {
        expect(rgbToHex(0, -1, 0)).to.equal(undefined);
    });

    it('returns undefined when blue is below 0', () => {
        expect(rgbToHex(0, 0, -1)).to.equal(undefined);
    });

    it('returns undefined when red is above 255', () => {
        expect(rgbToHex(256, 0, 0)).to.equal(undefined);
    });

    it('returns undefined when green is above 255', () => {
        expect(rgbToHex(0, 256, 0)).to.equal(undefined);
    });

    it('returns undefined when blue is above 255', () => {
        expect(rgbToHex(0, 0, 256)).to.equal(undefined);
    });

    it('returns undefined when red is a decimal', () => {
        expect(rgbToHex(1.5, 0, 0)).to.equal(undefined);
    });

    it('returns undefined when green is a decimal', () => {
        expect(rgbToHex(0, 1.5, 0)).to.equal(undefined);
    });

    it('returns undefined when blue is a decimal', () => {
        expect(rgbToHex(0, 0, 1.5)).to.equal(undefined);
    });

    it('returns undefined when red is a string', () => {
        expect(rgbToHex('255', 0, 0)).to.equal(undefined);
    });

    it('returns undefined when green is a string', () => {
        expect(rgbToHex(0, '0', 0)).to.equal(undefined);
    });

    it('returns undefined when blue is a string', () => {
        expect(rgbToHex(0, 0, '0')).to.equal(undefined);
    });
});