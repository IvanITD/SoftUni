const { expect } = require('chai');
const { PaymentPackage } = require('../../11-Payment Package/paymentPackage');

describe('11-Payment Package', () => {
    it('stores the name and value and uses the default VAT and active', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(pack).to.be.instanceOf(PaymentPackage);
        expect(pack.name).to.equal('HR Services');
        expect(pack.value).to.equal(1500);
        expect(pack.VAT).to.equal(20);
        expect(pack.active).to.equal(true);
        expect(typeof pack.toString).to.equal('function');
    });
    it('accepts zero as a value', () => {
        const pack = new PaymentPackage('HR Services', 0);
        expect(pack.value).to.equal(0);
    });
    it('throws when the name is not a non-empty string', () => {
        expect(() => new PaymentPackage(1, 1)).to.throw(Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage('', 1)).to.throw(Error, 'Name must be a non-empty string');
    });
    it('throws when the value is not a non-negative number', () => {
        expect(() => new PaymentPackage('HR Services')).to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('HR Services', '1500')).to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('HR Services', -1)).to.throw(Error, 'Value must be a non-negative number');
    });
    it('updates a valid name', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        pack.name = 'Consultation';
        expect(pack.name).to.equal('Consultation');
    });
    it('throws when the new name is not a non-empty string', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(() => pack.name = '').to.throw(Error, 'Name must be a non-empty string');
        expect(() => pack.name = 5).to.throw(Error, 'Name must be a non-empty string');
    });
    it('updates a valid value', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        pack.value = 800;
        expect(pack.value).to.equal(800);
    });
    it('throws when the new value is not a non-negative number', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(() => pack.value = -1).to.throw(Error, 'Value must be a non-negative number');
        expect(() => pack.value = '800').to.throw(Error, 'Value must be a non-negative number');
    });
    it('accepts zero as VAT and updates a valid VAT', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        pack.VAT = 0;
        expect(pack.VAT).to.equal(0);
        pack.VAT = 10;
        expect(pack.VAT).to.equal(10);
    });
    it('throws when VAT is not a non-negative number', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(() => pack.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
        expect(() => pack.VAT = '20').to.throw(Error, 'VAT must be a non-negative number');
    });
    it('accepts false for active', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        pack.active = false;
        expect(pack.active).to.equal(false);
    });
    it('throws when active is not a boolean', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(() => pack.active = null).to.throw(Error, 'Active status must be a boolean');
        expect(() => pack.active = 'true').to.throw(Error, 'Active status must be a boolean');
    });
    it('returns the overview of an active package', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        expect(pack.toString()).to.equal(
            'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
        );
    });
    it('appends (inactive) when the package is not active', () => {
        const pack = new PaymentPackage('HR Services', 1500);
        pack.active = false;
        expect(pack.toString()).to.equal(
            'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
        );
    });
    it('uses the current VAT in the overview', () => {
        const pack = new PaymentPackage('Consultation', 800);
        pack.VAT = 25;
        expect(pack.toString()).to.equal(
            'Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 25%): 1000'
        );
    });
});