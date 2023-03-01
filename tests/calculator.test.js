const { default: expect } = require('expect');
const { substract, multiply, divide, power, sum } = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
    expect(sum(4,6)).toBe(10);
})

test('substracts a - b', () => {
   //
   expect(substract(4,6)).toBe(-2);
})

test('multiplies a * b', () => {
    //
   expect(multiply(4,6)).toBe(24);

})

test('divides a / b', () => {
    // Consider decimals
    // if the division throw more than than one decimal round it with only one decimal
   expect(divide(1,3)).toBe(.3);

})

test('Raises to power a ^ b', () => {
    //
   expect(power(2,3)).toBe(8);

})

