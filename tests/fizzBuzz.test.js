const fizzbuzz = require('../fizzBuzz');

test('isFizzBuzz 23 = 23', () => {
    //
    expect(fizzbuzz.isFizzBuzz(23)).toBe(23);
})
test(`isFizzBuzz 12 = 'Fizz'`, () => {
    //
    expect(fizzbuzz.isFizzBuzz(12)).toBe("Fizz");
})
test(`isFizzBuzz 50 = 'Buzz'`, () => {
    //
    expect(fizzbuzz.isFizzBuzz(50)).toBe("Buzz");
})