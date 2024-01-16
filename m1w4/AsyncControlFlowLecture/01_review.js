//Functions
function anonymousFunction() {
    console.log("Hello world!")
}


// function anonymousFunction() {
//     console.log("Hello class!")
// }

// anonymousFunction()
//Function Declaration 
// We should always use const
const functionDeclaration = function() {

}


const arrowExpression = () => {

}

//Reference -> and a reference will never call the function
// anonymousFunction

// anonymousFunction() // Call to the function or invoking the function


// Callbacks

const higherOrderFunc = (callback) => {
    callback();
}
anonymousFunction()
console.log("Line 35")
// The reference of the function, is a callback
higherOrderFunc(anonymousFunction)

// Recursive functions