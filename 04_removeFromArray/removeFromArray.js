const removeFromArray = function(theArray, ...theElements) {

    for (elem of theElements){

        if (theArray.indexOf(elem) in theArray){    
            theArray.splice(theArray.indexOf(elem), 1);    
        }
        
    }
    return theArray;
    
};
// Do not edit below this line
module.exports = removeFromArray;
