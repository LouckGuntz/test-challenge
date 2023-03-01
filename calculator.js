const calculator = {
    sum(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if(a%b !== 0){
            return Number((a/b).toFixed(1));
            // return (a/b).toFixed(1);
            
        }else{
            return a / b;
        }
    },
    power: (a,b) => a ** b,
}

// console.log(calculator.divide(5,2));


module.exports = calculator;