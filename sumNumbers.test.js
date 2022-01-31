let { expect } = require('chai');
let sum = require('./sumNumbers');

describe('Sum Numbers', () => {
    it('to be array', () => {
        expect(sum([2, 3])).to.equal(5);
    });
    it('to be array', () => {
        expect(sum(['3', 2])).to.equal(5);
    });
});