const { expect } = require('chai');
const { requestValidator } = require('../../01-Request Validator/requestValidator');

describe('01-Request Validator', () => {
    it('returns the same request if it is valid', () => {
        const request = {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        };

        expect(requestValidator(request)).to.equal(request);
    });

    it('accepts an asterisk as a uri', () => {
        const request = {
            method: 'GET',
            uri: '*',
            version: 'HTTP/1.1',
            message: ''
        };

        expect(requestValidator(request)).to.equal(request);
    });

    it('throws for an invalid method', () => {
        const request = {
            method: 'OPTIONS',
            uri: 'git.master',
            version: 'HTTP/1.1',
            message: '-recursive'
        };

        expect(() => requestValidator(request)).to.throw('Invalid request header: Invalid Method');
    });

    it('throws for an invalid uri', () => {
        const request = {
            method: 'GET',
            uri: 'home$',
            version: 'HTTP/1.1',
            message: ''
        };

        expect(() => requestValidator(request)).to.throw('Invalid request header: Invalid URI');
    });

    it('throws when the version is missing', () => {
        const request = {
            method: 'POST',
            uri: 'home.bash',
            message: 'rm -rf /*'
        };

        expect(() => requestValidator(request)).to.throw('Invalid request header: Invalid Version');
    });

    it('throws for a message with a special character', () => {
        const request = {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: 'hello <world>'
        };

        expect(() => requestValidator(request)).to.throw('Invalid request header: Invalid Message');
    });
});