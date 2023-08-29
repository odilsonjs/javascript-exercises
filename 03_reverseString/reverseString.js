const reverseString = function(string) {
    let stringInArray = string.split("");
    let stringInArrayReversed = stringInArray.reverse();
    let joinedStringInArrayReversed = stringInArrayReversed.join("");
    return joinedStringInArrayReversed;
};


// Do not edit below this line
module.exports = reverseString;
