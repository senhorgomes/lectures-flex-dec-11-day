// const assert = require('assert');


function add(number1, number2){
    // Both parameters are being converted to Number data types before being added together
    const convertedNumber1 = Number(number1);
    const convertedNumber2 = Number(number2);
    return convertedNumber1 + convertedNumber2;
}

function subtraction(number1, number2){
    return number1 - number2;
}

module.exports = { add, subtraction};
// Inside of the test, the first parameter is what we want to test
// Second parameter is our solution
// assert.equal(add(5,5), 10)
// console.log("Message that describes our test")
// assert.equal(add(2,3), 2)