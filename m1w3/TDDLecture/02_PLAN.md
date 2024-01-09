# conditionalSum -> Function takes in an array of numbers, and a condition(even, odd)
# -> Depending on the condition, it will add all the odd numbers or all the even numbers and return a sum

# Starbucks Function -> Function takes in a name, a specific order(size, espresso shots count, milk type, etc)
# And outputs an object which is the drink itself


# What does it mean 
Function takes in a name, a specific order(size, espresso shots count, milk type, etc)
And outputs an object which is the drink itself

# Input and Outputs

Input -> name, size (small, medium, large), dairy (no milk, 2%, oat), sugars (integer -> 0,1,2, etc)

Output -> A single object, with different keys respective to the order

Return
```javascript
orderObject = {
    name: "string",
    size: "string",
    dairy: "string",
    sugar: 0 //integer
}
```

# How will the function be executed

```javascript
coffeeLighthouseLabs("Bryan", "small", "oat", 2)
coffeeLighthouseLabs("Kevin", "medium", "2%", 1)
coffeeLighthouseLabs("Rouslan", "large","no milk",2)

```
# Test cases

Edge cases

Happy Path
```javascript
coffeeLighthouseLabs("Bryan", "small", "oat", 2) //This will output a drink order correctly
```

Unhappy Path
<!-- Things can break -->
- What happens if we dont insert all the inputs? Do we still output an order? Or do we throw an error?
    - What should happen if an arguement is missing?
    Returning an order, we could return a message
    Your order is invalid, please check your arguements, and try again.
- Invalid inputs => (small, medium, large)
- Parameter types should always match
- Reorder the inputs -> coffeeLighthouseLabs("small", 0, "Bryan", oat)
