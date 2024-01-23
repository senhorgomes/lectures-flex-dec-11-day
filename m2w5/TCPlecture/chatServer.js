// TCP chat server
// net -> package that is built into NodeJS
const net = require("net");

const arrayOfConnections = [];

const server = net.createServer((connection)=> {
    // We need to encode or translate the information that is being sent from other connection
    connection.setEncoding("utf-8");

    // What to do when a connection is made
    // Each connection is an object. Which has different methods
    console.log("A new user has joined")
    arrayOfConnections.push(connection)
    console.log(`There are ${arrayOfConnections.length} connections in this server`)
    // As a server we need to be able to handle data that is sent from a connection
    connection.on('data', (data) => {
        // console.log(data)
        // Is we want to somehow send this information back
        // Loop through the array of connections, and run the .write method for each one
        for(const client of arrayOfConnections){
            // We have to write to every other connection
            // We have to find the connection that sent this data
            // Comparing two objects?
            // Comparing two references of the same object
            if(connection !== client){
                client.write(`Client says: ${data}`)
            }
        }
        // connection.write(data)
    })

    // Create an event for when a user disconnects
    connection.on('end', ()=>{
        console.log("A user has disconnected")
    })
})

server.listen(3000, ()=> {
    console.log("I am listening!!!")
})