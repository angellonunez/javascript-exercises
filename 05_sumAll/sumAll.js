const sumAll = function(initialNumber, finalNumber) {
    let finalSum = 0;
    if (initialNumber > finalNumber) {
        let newNumber = finalNumber;
        finalNumber = initialNumber;
        initialNumber = newNumber;
    }

    if (typeof initialNumber !== "number" || typeof finalNumber  !== "number" || initialNumber < 0 || finalNumber < 0) {
        return "ERROR";
    }

    for (let i = initialNumber; i <= finalNumber; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
