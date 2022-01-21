let { expect } = require('chai');
let { sum, multiply } = require('./myModule');

describe('Test Demo', () => {
    it('sum works with 3 and 5', () => {
        expect(sum(3, 5)).to.be.equal(8);
    });

    it('multiply works with 3 and 5', () => {
        expect(multiply(3, 5)).to.be.equal(15);
    });
});

//"echo \"Error: no test specified\" && exit 1"