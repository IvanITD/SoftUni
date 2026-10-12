describe('sum', () => {
    it('sums numbers in an array', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('returns 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('returns the only element', () => {
        expect(sum([5])).to.equal(5);
    });

    it('adds negative numbers', () => {
        expect(sum([-1, 2, 3])).to.equal(4);
    });

    it('converts string numbers', () => {
        expect(sum(['1', '2'])).to.equal(3);
    });

    it('returns NaN for invalid values', () => {
        expect(sum(['pesho', 'gosho'])).to.be.NaN;
    });
});