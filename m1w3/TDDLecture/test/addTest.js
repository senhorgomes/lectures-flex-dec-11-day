// Mocha - testing framework - think of it as a tool to assist us in creating tests
// Chai - assertion library - think of it as a tool to help us evaluate values

// const assert = require('assert');
const { assert } = require('chai');
const { add, subtraction} = require("../whyTest");
describe("Testing the add function,", ()=> {
    // Write our individual tests
    it("to ensure it can perform basic addition", ()=> {
        assert.equal(add(2,3), 5);
        
    })
    it("to ensure it only returns integers", ()=> {
        // If the value return from our function is not a string
        assert.isNotString(add(2,"3"), "The value returned is a string")
    })
})