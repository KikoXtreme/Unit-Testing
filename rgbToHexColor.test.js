let { expect } = require('chai');
let rgbToHexColor = require('./rgb');

describe('RGB Convertor', () => {

    describe('Numbers', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('converts black', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
    });

    describe('Invalid Parameters', () => {
        it('returns undefines for missing params', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });

        it('returns undefines for values out of range', () => {
            expect(rgbToHexColor(255, 255, 256)).to.be.undefined;
        });

        it('returns undefines for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });

        it('returns undefines for invalid parms type', () => {
            expect(rgbToHexColor('255', '5', '55')).to.be.undefined;
        });
    });
});