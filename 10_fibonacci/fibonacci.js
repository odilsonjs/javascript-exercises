const fibonacci = function(number) {
    let counter = 1;
    let fibonacciSequence = [1, 1];
    number = Number(number);
    if (number == 1){
        return fibonacciSequence[fibonacciSequence.length - 1];    
    } else if (number == 2) {
        return fibonacciSequence[fibonacciSequence.length - 1];
    } else if (number < 0){
        return "OOPS"
    } else {
        while(counter <= number-2){
            fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
            counter++;
        }
        return fibonacciSequence[fibonacciSequence.length - 1];
    }
    
};


// Do not edit below this line
module.exports = fibonacci;
