let { expect } = require('chai');
let cinema = require('./cinema');

describe('Tests', () => {

    describe('showMovies', () => {

        it('Empty Arr', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('Full Arr', () => {
            expect(cinema.showMovies(['The Tomorrow War', 'King Kong'])).to.equal('The Tomorrow War, King Kong');
        });

        it('Full Arr', () => {
            expect(cinema.showMovies(['The Tomorrow War'])).to.equal('The Tomorrow War');
        });
    });

    describe('ticketPrice', () => {

        it('Premiere', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });

        it('Normal', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });

        it('Discount', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it('Error', () => {
            expect(() => cinema.ticketPrice('Kiko')).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {

        it('Not Successful Sawp', () => {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.25, 7)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-2, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');

            expect(cinema.swapSeatsInHall('a', 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([], 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a', 'b')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a', '3')).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Successful Sawp', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });
    });
});