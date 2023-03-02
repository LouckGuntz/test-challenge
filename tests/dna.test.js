const dna= require('../dna');

test(`canonical dna of CTAGGgGcCccA = 'C,T,A,G`, () => {
    //
    expect(dna.canonical('CTAGGgGcCccA')).toBe('C,T,A,G');
})