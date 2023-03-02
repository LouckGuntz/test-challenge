const factorial = {
    factorial(num){
        let res =1;
        for (let index = 0; index < num; num--) {
            res *= num; 
            // console.log(res); 
        }
        return res;
        }

 }
 
//  console.log(factorial.factorial(6));
 
 module.exports = factorial;