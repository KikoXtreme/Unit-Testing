let { expect } = require('chai');
let lookupChar = require('./charLookup');

describe('Test Char Lookup', () => {
    it('Correct inputs', () => {
        expect(lookupChar(2, 2)).to.be.undefined;
        expect(lookupChar('2', '5')).to.be.undefined;
        expect(lookupChar('2', 1.23)).to.be.undefined;

        expect(lookupChar([], 2)).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
        expect(lookupChar('2', [])).to.be.undefined;
        expect(lookupChar('2', {})).to.be.undefined;
    });
    
    it('incorrect index value', () => {
        expect(lookupChar('a', -2)).to.equal('Incorrect index');
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
        expect(lookupChar('aa', 5)).to.equal('Incorrect index');
    });

    it('incorrect index value', () => {
        expect(lookupChar('asd', 0)).to.equal('a');
        expect(lookupChar('asdf', 3)).to.equal('f');
    });
});