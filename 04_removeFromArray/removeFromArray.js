const removeFromArray = function(array, ...removed) {
    let newArray = [];
    array.forEach((item) => {
        if (!removed.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
