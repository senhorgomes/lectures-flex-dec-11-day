// package.js -> allows to see what node packages are installed
// Before installing express, its a good idea to create one first
// We can do this with the command npm init -y

// We need to install express
// import express into our server file
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const users = {
    1: {
        id: 1,
        email: "obiwan@gmail.com",
        password: "hellothere"
    },
    2: {
        id: 2,
        email: "lukeskywalker@gmail.com",
        password: "hellothere"
    },
    3: {
        id: 3,
        email: "leiaskywalker@gmail.com",
        password: "hellothere"
    },
}

// Next we are assigning the return value of express into a variable called app
const app = express()
// These ports are always open, for development purposes
// Port series? can range from 3000-3999-> 3000/3030
// 8000-8999 -> 8000/8080
const port = 3000 //8000


//Template engine
//Express deals with static HTML files.
// We can handle dynamic information with EJS -> Embedded Javascript
app.set('view engine', 'ejs')


// Middleware -> Middleman
// Morgan -> debuging server errors
app.use(morgan('dev')) // -> in your next project
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
// We are establishing a single route, with a method
// Method = GET
// Route = / => http://localhost:3000/
// Homepage
// The first is the route/path, the second is a callback to handle the request and the response
app.get('/', (req, res) => {
//   res.send('Hello World!')
// We want to display a page
// When a client make a request to this path
// We will send a render of the index.ejs file as a response for them
    // Setting a cookie
    // The first argument is the cookie key, the second is the value
    res.cookie("cookie", "oatmeal")
    res.render('index')
})


app.get('/login', (req, res)=> {
    // What happens if the user is already logged in?
    // We can check if the user is logged and redirect them to the profile page
    if(req.cookies.user){
        return res.redirect('/profile')
    }
    // If they aren't then they can log in
    res.render('login');
})

// GET route -> Reading information, retrieving, etc
// Manipulate or send information -> POST
app.post('/login', (req, res) =>{
    console.log(req.body)
    const emailFromForm = req.body.email;
    const passwordFromForm = req.body.password;
    // Create a helper function that checks if the email exists
    // Loop through the users, see if the email matches
    // Looping through an object? lets use for-in
    for(const userId in users){
        if(users[userId].email === emailFromForm){
            // If it does, we check to see if the password matches as well.
            if(users[userId].password === passwordFromForm){
                // Save the cookie information of the user
                res.cookie("user", req.body.email)
                // We should never render inside of a post
                res.redirect('/profile')
                return
            }
        }
    }
    res.status(401).send("Your email and/or password are incorrect")
})

app.post('/logout', (req, res) => {
    // res.cookie("user", null)
    res.clearCookie("user")
    res.redirect('/')
})

app.get('/profile', (req, res) => {
// How can we retrieve the cookie name, and send it to the ejs file?
    // const cookieObject = req.headers.cookie
    console.log(req.headers.cookie)
    console.log("Parsed", req.cookies.cookie)



//   res.send('Hello World!')
// We want to display a page
// When a client make a request to this path
// We will send a render of the index.ejs file as a response for them
    res.render('profile', {userId: req.cookies.user})
})

// Reference other files -> EJS
// Method = GET
// Route = /greenday => http://localhost:3000/greenday
app.get('/greenday', (req, res) => {
  res.send('Wake me up when September ends!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})