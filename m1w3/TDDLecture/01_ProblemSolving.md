# How to approach a problem
- What do I have, what do I need, what tools I have, how can I use these tools to bring the output
- Understand the question first
- console.log each step 
- Quality of prospective
- pseudo code
- Reverse engineering
- Checking the output
- Logical flowchart

# Coding problems

- Create a skeleton, using pseudo code
```javascript
function add(number1, number2){
    // Well we would add these two arguements together
    // Return the sum
}
```



### Create a function that takes in an array, and adds two to each element in that array.

- Breakdown the problem
 - Inputs 
    - An array of unlimited elements. The elements should only be numbers
 - Outputs
    - The array, with the same length, with every element modified

- Skeleton

```javascript
function modifyArray(array){
    
}
```








When to use TDD?
 - Is my function being used for a larger application?

- Edge Cases - > Extremes
    - Happy cases
        - User inputs an array with numbers, and the function return a modified array
    - Sad cases (EVERYTHING BROKE)
        - What if we inputted strings instead of numbers. Check for only integers
            The main factor of what should be outputted, is how the rest of the application works
            - Convert the strings into numbers, and convert them if possible
            - Concatenate with a 2 after each number
            - Return an error "Hey, this array doesn't only have numbers"
        - What happens if you input an empty array
            - Write down your expected return
        - What if the numbers have spaces
        - What if someone passes in an objects

- Test Cases
- Possible Solutions