const { assert } = require("chai");
const coffeeLighthouseLabs = require("../coffeeLHL");

describe("Testing coffeeLighthouseLabs function", ()=>{
    describe("Happy paths", ()=> {
        it("if given the correct arguements, it will return a coffee order object.", ()=> {
            assert.isObject(coffeeLighthouseLabs("Bryan", "small", "oat", 2))
        })
        it("if given the correct arguements, the object contains a name key", ()=> {
            const actual = coffeeLighthouseLabs("Bryan", "small", "oat", 2)
            // we want to check if actual.name !== undefined
            assert.isString(actual.name);
        })
        it("if an order with no sugar, the order will be processed", ()=> {
            const actual = coffeeLighthouseLabs("Bryan", "small", "oat", 0)
            assert.isString(actual.name);
        })
    })
    describe("Unhappy paths", ()=> {
        it("if given the incorrect amount of arguements, the function will output a message", ()=> {
            const actual = coffeeLighthouseLabs("Bryan", "small", "oat")
            const expected = "Your order is invalid, please check your arguements, and try again."
            // we want to check if actual.name !== undefined
            assert.equal(actual, expected);
        })
        it("if given the incorrect size, the function will output a message", ()=> {
            const actual = coffeeLighthouseLabs("Bryan", "extra small", "oat", 0)
            const expected = "Your order size in invalid, please check your arguements, and try again."
            // we want to check if actual.name !== undefined
            assert.equal(actual, expected);
        })

    })

})