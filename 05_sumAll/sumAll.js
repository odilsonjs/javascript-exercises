const sumAll = function(firstInt, lastInt) {
   
    if (Number.isInteger(firstInt) && Number.isInteger(lastInt)){
        if (firstInt >= 0 && lastInt >= 0){
        let myArray = [];
        let sum = 0;

        if(firstInt > lastInt){
            while(firstInt >= lastInt){
                myArray.push(firstInt)
                firstInt--
            }
        } else {
            while(firstInt <= lastInt){
                myArray.push(firstInt);
                firstInt++;
            } 

        }
    
        for (let i of myArray){
            sum += i;
        }
        return sum;

        } else {
            return "ERROR";
        }
    }
    else {
        return "ERROR";
    }
    }
;


// Do not edit below this line
module.exports = sumAll;
