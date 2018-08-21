//todo make a function that outputs the factorial of 10
var summation = function(num){
    var sum = 0;
    for (var i = num; i>0;i--){
        sum *= i;
    }
    return sum;
}
console.log(factorial(5));