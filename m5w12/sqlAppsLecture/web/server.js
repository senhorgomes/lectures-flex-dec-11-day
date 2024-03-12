require('dotenv').config();
const client = require('./db/connection')
const express = require('express');
const morgan = require('morgan');

const { fetchAllVillains, deleteVillains } = require('./db/queries/villain-queries')
// Our express file should only contain things related to express
//  Its a good practice to remove anything that doesnt have to do with express and move it to a seperate file
// const { Client } = require('pg');
// // Pool AND Client
// // // PG connection

// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   // If you're hosting this on someplace else
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database:process.env.DB_DATABASE
// }

// const client = new Client(config)

// client.connect(()=>{
//     console.log("Connection successful!");
// })

const port = process.env.PORT || 8000;
const app = express();

app.use(morgan('dev'));
// view engine set to EJS
app.set("view engine", "ejs");
// req.body parser
app.use(express.urlencoded({ extended: true }));
//
//Routes - CRUD -BREAD
// Create - Add -> POST route which is /
// Read - Browse/Read -> / or /:id
// Update - Edit -> /edit/:id
// Delete - Delete -> /delete/:id

// Import our queries


//Fetch and display all villains in database!
app.get('/', (req, res)=>{
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database
  // client.query('SELECT * FROM villains;')
  // // .then((response)=> res.json(response.rows))
  // // How do we pass information to an ejs file?
  // //Is the response from the database. The database is replying back to the server
  // .then((response)=> 
  // // The server response to the client
  // res.render('index', {villains: response.rows})
  // )
  // client.query('SELECT * FROM movie_villains;', (err, results)=> {
  //   if(err){
  //       console.log("Uh oh something broke", err)
  //       return
  //   }
  // })
  fetchAllVillains().then((results)=> 
    res.render('index', {villains: results})
  )

})

app.get('/edit/:id', (req, res)=>{
  const villainId = req.params.id;
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [villainId])
  .then((response)=> {
    // console.log(response.ro)
    // The server response to the client
    res.render('edit', {villain: response.rows[0]})
  })
})
app.post('/edit/:id', (req, res)=>{
  const villainId = req.params.id;
  const villainName = req.body.villainName
  const villainType = req.body.villainType
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database

  // This is bad practice and can have your data be manipulated by someone you don't want to
  // client.query(`UPDATE villain SET name = ${villainName}, type = ${villainType} WHERE id = ${villainId};`)
  // Instead its always better to use parameterized queries
  client.query('UPDATE movie_villain SET name = $1, type = $2 WHERE id = $3;', [villainName, villainType, villainId])
  .then((response)=> {
    // console.log(response.ro)
    // The server response to the client
    res.redirect('/')
  })
})

app.post('/delete/:id', (req, res)=>{
  const villainId = req.params.id;
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database
  // client.query('DELETE FROM movie_villains WHERE id = $1;', [villainId])
  // .then((response)=> res.json(response.rows))
  // How do we pass information to an ejs file?
  //Is the response from the database. The database is replying back to the server
  deleteVillains(villainId)
  .then((response)=> {
    // The server response to the client
    res.redirect('/')
})
})

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
})
