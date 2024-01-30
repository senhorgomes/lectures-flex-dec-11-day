//Express is a routing and middleware web framework

//Middleware

// Requiring the package
const express = require('express');
const path = require("path");
const app = express()
const port = 3000
const morgan = require("morgan")
//Middleware
app.use(morgan('dev'))
app.set('view engine', 'ejs')

// app.use((req,res, next)=>{
//     console.log(`New Request: ${req.method} ${req.url}`)
//     next();
// })

// We can also use middleware to display html
// View engine
// EJS -> Embedded Javascript

// Handle routes

// Method is GET
// Path? /hello

// How can we render a page in http/express?
// req = request
// res = response

// Params

const object = {
    firstKey: "value"
}

app.get('/hello', (req, res) => {
  res.send(object)
    // res.sendFile(path.join(__dirname, "/helloPage.html"))
    // res.render('helloPage');
})

app.get('/hello/:name', (req, res) => {
    console.log("Object",req.params)
    console.log(req.params.name);
    // Template variables

    const tempVariable = {firstName: req.params.name, userLoggedIn: false}
//   res.send('Hello World!')
    // res.sendFile(path.join(__dirname, "/helloPage.html"))
    res.render('helloPage', tempVariable);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
