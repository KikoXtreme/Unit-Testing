let { expect } = require('chai');
let isSymmetric = require('./symmetry');

describe('Symmetry Checker', () => {
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 1])).to.be.false;
    });

    it('returns false for not correct input type', () => {
        expect(isSymmetric(3)).to.be.false;
    });
    
    it('returns false for symmetric array with wrong input type', () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    });
});

 // "test": "echo \"Error: no test specified\" && exit 1"