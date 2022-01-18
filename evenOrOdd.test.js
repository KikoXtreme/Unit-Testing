let { expect } = require('chai');
let isOddOrEven = require('./evenOrOdd');

describe('evenOrOdd', () => {
    it('returns not str', () => {
        expect(isOddOrEven(2)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    })

    it('returns odd str', () => {
        expect(isOddOrEven('2')).to.equal('odd');
    })

    it('returns even str', () => {
        expect(isOddOrEven('kiko')).to.equal('even');
        expect(isOddOrEven('')).to.equal('even');
    })
});