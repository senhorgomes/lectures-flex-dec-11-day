const net = require("net");
// telnet localhost 3000
const client = net.createConnection({host: "localhost", port: 3000}, ()=> {
    client.setEncoding("utf-8")
    // Type in "Hey server, how are you?" and press enter
    client.write("Hey server, how are you?")
})
// Every event needs to be handled in code

client.on('data', (data)=>{
    console.log(data)
})