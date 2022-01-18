let {expect} = require('chai');
let companyAdministration = require('./companyAdministration');

describe('Tests', () => {

    describe('hiringEmployee', () => {

        it('not a programmer', () => {
            expect(() => companyAdministration.hiringEmployee('kiko', 'kiko', 20)).to.throw('We are not looking for workers for this position.');
        });

        it('experience greater then 3', () => {
            expect(companyAdministration.hiringEmployee('Kiko', 'Programmer', 3)).to.equal(`Kiko was successfully hired for the position Programmer.`);
        });

        it('not met criteria', () => {
            expect(companyAdministration.hiringEmployee('Kiko', 'Programmer', 2)).to.equal(`Kiko is not approved for this position.`);
        });
    });

    describe('calculateSalary', () => {

        it('salary', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
        });

        it('salary', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

        it('invalid input not a number', () => {
            expect(() => companyAdministration.calculateSalary('hours')).to.throw('Invalid hours');
        });

        it('invalid input not a number', () => {
            expect(() => companyAdministration.calculateSalary('3')).to.throw('Invalid hours');
        });

        it('invalid input not a number', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });
    });

    describe('firedEmployee', () => {

        it('array', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });

        it('array', () => {
            expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal('');
        });

        it('invalid input', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');
        });

        it('invalid input', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
        });

        it('invalid input', () => {
            expect(() => companyAdministration.firedEmployee('Petar, Ivan, George', 3)).to.throw('Invalid input');
        });

        it('invalid input', () => {
            expect(() => companyAdministration.firedEmployee('Petar, Ivan, George', 'test')).to.throw('Invalid input');
        });

        it('invalid input', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'test')).to.throw('Invalid input');
        });
    });
});