//HTTP Server

const http = require("http");

const server = http.createServer();

// I dont have code to handle that specific request

// Because servers have to handle both
// They take in a request, and output a response
// But we need to specify what type of response to send back
server.on("request", (request, response)=>{
    // We need to check if different paths are request
    console.log("URL of req:", request.url)
    // Convert the object in a JSON first
    const object = {
        firstKey: "value"
    }
    const jsonObject = JSON.stringify(object)
    // 4 types of requests
    // The type of request that we are making right now is a GET request
    // GET - retrieve information

    // Reassigning the key value of the object into another value
    if(request.url === "/hello"){
        response.end(jsonObject)
        return
    }
    if(request.url === "/goodbye"){
        response.end("<h1>Goodbye</h1>")
        return
    }
    // Handle errors/ handle paths that don't exist
    response.end("Sorry we couldn't fetch that page. Please try again")
})


server.listen(3000, () => {
    console.log("I am listening")
})