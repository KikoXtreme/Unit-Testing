let { expect } = require('chai');
let createCalculator = require('./addSubtract');

describe('addSubtract', () => {
    let instance = null;
    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('add single number', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('subtract single number', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it('add subtract single number', () => {
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-1);
    });

    describe('addSubtract', () => {
        let instance = null;
        beforeEach(() => {
            instance = createCalculator();
        });
    
        it('has all methods', () => {
            expect(instance).to.has.ownProperty('add');
            expect(instance).to.has.ownProperty('subtract');
            expect(instance).to.has.ownProperty('get');
        });
    
        it('start empty', () => {
            expect(instance.get()).to.equal(0);
        });

        it('add single number', () => {
            instance.add(1);
            instance.add(2);
            expect(instance.get()).to.equal(3);
        });

        it('add str', () => {
            instance.add('1');
            expect(instance.get()).to.equal(1);
        });
    
        it('subtract single number', () => {
            instance.subtract(1);
            instance.subtract(2);
            expect(instance.get()).to.equal(-3);
        });

        it('subtract subtract str', () => {
            instance.subtract('2');
            expect(instance.get()).to.equal(-2);
        });
    
        it('add subtract single number', () => {
            instance.add('1');
            instance.subtract('2');
            expect(instance.get()).to.equal(-1);
        });
    });
});