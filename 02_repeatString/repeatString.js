const repeatString = function(string, num) {

    let final_string = "";
    if (num >= 0){
        for (let i = 0; i < num; i++){
            final_string += string;
        }
        return final_string;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
