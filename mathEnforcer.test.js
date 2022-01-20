let { expect } = require('chai');
let mathEnforcer = require('./mathEnforcer');

describe('Test Math Enforcer', () => {
    it('Expect add undefined', () => {
        expect(mathEnforcer.addFive('2')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it('Expect proper add result', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-2)).to.be.equal(3);
        expect(mathEnforcer.addFive(3.7)).to.be.closeTo(8.7, 0.01);
    });

    it('Expect subtract undefined', () => {
        expect(mathEnforcer.subtractTen('2')).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it('Expect proper subtract result', () => {
        expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        expect(mathEnforcer.subtractTen(-2)).to.be.equal(-12);
        expect(mathEnforcer.subtractTen(13.7)).to.be.closeTo(3.7, 0.01);
    });

    it('Expect sum fn undefined', () => {
        expect(mathEnforcer.sum(2, '2')).to.be.undefined;
        expect(mathEnforcer.sum(2, [])).to.be.undefined;
        expect(mathEnforcer.sum(2, {})).to.be.undefined;
        expect(mathEnforcer.sum('2', 2)).to.be.undefined;
    });

    it('Expect proper sum fn result', () => {
        expect(mathEnforcer.sum(2, 4)).to.be.equal(6);
        expect(mathEnforcer.sum(-1, -2)).to.be.equal(-3);
        expect(mathEnforcer.sum(2.2, 13.7)).to.be.closeTo(15.9, 0.01);
    });
});