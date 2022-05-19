/**
 * @jest-environment jsdom
 */

const addition = require('../calc');

describe('Calculator', () => {
    describe('Addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        })
        test('should return 43 for 21 + 22', () => {
            expect(addition(21, 22)).toBe(43);
        })
        test('should return 73 for 50 + 23', () => {
            expect(addition(50, 23)).toBe(73);
        })
        test('should return 81 for 46 + 35', () => {
            expect(addition(46, 35)).toBe(81);
        })
    });
    describe('Subtraction function', () => {

    });
    describe('Multiplication function', () => {

    });
    describe('Division function', () => {

    });
})