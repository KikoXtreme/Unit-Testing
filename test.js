let { expect } = require('chai');
let { sum, multiply } = require('./myModule');

describe('Test Demo', () => {
    it('works with 3 and 5', () => {
        expect(sum(3,5)).to.be.equal(8);
    });
});

//"echo \"Error: no test specified\" && exit 1"