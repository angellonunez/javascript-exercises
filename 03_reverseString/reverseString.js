const reverseString = function(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};

/* Another solution
const reverseString = function (string) {
    return string.split("").reverse().join("");
};
*/


// Do not edit below this line
module.exports = reverseString;
