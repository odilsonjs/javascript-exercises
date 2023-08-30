const palindromes = function (theString) {
     let loweCaseString = theString.replace(/[ .,*+?^$!{}()|[\]\\]/g, "").toLowerCase();
     let stringReversed = loweCaseString.split("").reverse().join("");
     return loweCaseString == stringReversed;

    

};
// Do not edit below this line
module.exports = palindromes;
