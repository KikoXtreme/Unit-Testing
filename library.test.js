let { expect } = require('chai');
let library = require('./library');

describe('Tests', () => {

    describe('calcPriceOfBook', () => {

        it('After 1980 year', () => {
            let price = 20;
            let nameOfBook = 'OK book';
            expect(library.calcPriceOfBook(nameOfBook, 1981)).to.equal(`Price of ${nameOfBook} is ${price.toFixed(2)}`);
        });

        it('After 1980 year, discount', () => {
            let price = 20;
            let nameOfBook = 'OK book';
            expect(library.calcPriceOfBook(nameOfBook, 1980)).to.equal(`Price of ${nameOfBook} is ${(price / 2).toFixed(2)}`);
        });

        it('After 1980 year', () => {
            let price = 20;
            let nameOfBook = 'OK book';
            expect(() => library.calcPriceOfBook(nameOfBook, 1981.12)).to.throw('Invalid input');
        });

        it('After 1980 year', () => {
            let price = 20;
            let nameOfBook = ['OK book'];
            expect(() => library.calcPriceOfBook(nameOfBook, 1981)).to.throw('Invalid input');
        });

        it('After 1980 year', () => {
            let price = 20;
            let nameOfBook = undefined;
            expect(() => library.calcPriceOfBook(nameOfBook, 1981)).to.throw('Invalid input');
        });
    });

    describe('findBook', () => {

        it('Arr.length = 0', () => {
            expect(() => library.findBook([], 'string')).to.throw('No books currently available');
        });

        it('String in Arr', () => {
            expect(library.findBook(['string'], 'string')).to.equal('We found the book you want.');
        });

        it('Not present string in Arr', () => {
            expect(library.findBook(['sasd'], 'string')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {

        it('Not Int Num', () => {
            expect(() => library.arrangeTheBooks(1.25)).to.throw('Invalid input');
        });

        it('Negative Num', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('Negative Num', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('Negative Num', () => {
            expect(library.arrangeTheBooks(42)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});