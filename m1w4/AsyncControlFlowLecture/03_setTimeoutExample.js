// setTimeout
// Asynchronous Function Non-Blocking
// Its a timer
console.log("Hello")
setTimeout(()=> {
    // Callback
    console.log("This is setTimeout")
}, 5000) //=> The delay is written in ms, 1000ms = 1 second of delay
console.log("Goodbye")
setTimeout(()=> {
    // Callback
    console.log("This is after goodbye")
}, -1000)