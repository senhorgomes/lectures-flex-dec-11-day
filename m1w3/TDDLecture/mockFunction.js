const arrayOfNumbers = [1,2,3,4,5]
// [3,4,5,6,7]
// create a function
const modifyArray = (array) => {
    //We would need to create a new array first
    const newArray = [];

    //We need to add two to each element in that array
    // loop through the array, and target each element
    for(let element of array){
        //add 2 to each element, and push that value to the new array
        //check to see if element is a number, if it isn't, break the loop
        if(typeof element !== "number"){
            return "Unexpected input"
        }
        const modifiedElement = element + 2;
        newArray.push(modifiedElement)
    }
    return newArray;
}

console.log(modifyArray([1,"hello"]))

const add = (num1, num2) => num1 + num2;

module.exports = add;

const add = require("../add");
const assert = require("chai").assert;

describe("my thing to test", () => {
  it("checks equality of addition", () => {
    assert.equal(add(2, 2), 4);
  });
});