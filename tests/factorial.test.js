const factorial= require('../factorial');

test('factorial of 6 = 1*2*3*4*5*6 = 720', () => {
    //
    expect(factorial.factorial(6)).toBe(720);
})
