let { expect } = require('chai');
let testNumbers = require('./testNumbers');

describe('Test Numbers', () => {

    describe('sumNumbers', () => {

        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
        });

        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
        });

        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(5.555, 3.333)).to.equal('8.89');
        });

        it('returns undefined with string params', () => {
            expect(testNumbers.sumNumbers('2', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(2, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('2', 2)).to.equal(undefined);
        });

        it('returns undefined with one invalid param', () => {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(2, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
        });
    });

    describe('numberChecker', () => {

        it('works with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });

        it('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('works with odd value', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });

        it('works with even value', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });

        it('detects invalid params', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });

    describe('averageSumArray', () => {

        it('average sum', () => {
            expect(testNumbers.averageSumArray([1, 2])).to.equal(1.5);
        });

        it('average sum', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5])).to.equal(2);
        });
    });
});