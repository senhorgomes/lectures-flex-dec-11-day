//Create a function that goes through a string very slowly
const stringExample = "Hello World\n"
//Loop through this string, and console.log each letter
// How do we loop through a string?

let delay = 500;
for(const letter of stringExample){
    setInterval(()=> {
        process.stdout.write(letter)
        // We need to increment our delay
    }, delay)
    delay += 500;
}
// H => 500
// e => 1000
// l => 1500