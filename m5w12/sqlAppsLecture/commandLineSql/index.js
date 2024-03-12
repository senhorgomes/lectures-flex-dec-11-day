// Connect postgres to this javascript file
require("dotenv").config()
const { Client } = require("pg");

// Some information
// We need to feed pg information about where our database is stored
// user credentials
// The name of the database
// The port its being hosted
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // If you're hosting this on someplace else
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database:process.env.DB_DATABASE
}
console.log(config)

// Create a client connection to postgresql

const client = new Client(config);

client.connect().then(()=> console.log("Connected successfully!"))

const verb = process.argv[2]
// Either ID or information to add into the table
const secondArgument = process.argv[3];
const thirdArgument = process.argv[4];
const fourthArgument = process.argv[5];
const fifthArgument = process.argv[6];
console.log(secondArgument)
// We want to capture the inputs of the user
// Figure out how the user wants to access/manipulate the data
// return information if needed -> provide feedback to the user -> providing a response
// Browse Read DELETE
// node index.js <verb> <id>

// ADD
// node index.js ADD <villain name> <movie name>
// EDIT
// node index.js EDIT <id> <column name> <new value>

// We need to establish BREAD crumbs
// We have to create different queries
// Browse - We are reading all of the values -> SELECT * FROM table;
//-----> SELECT * FROM movie_villains;
if(verb === "BROWSE"){
    client.query('SELECT * FROM movie_villains;', (err, res)=> {
        if(err){
            console.log("Uh oh something broke", err)
            return
        }
        console.table(res.rows);
    })
}


// Read - We only want to retrieve specific information -> SELECT * FROM table WHERE id = <id>;
//-----> SELECT * FROM movie_villains WHERE id = <id>;

if(verb === "READ"){
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [secondArgument], (err, res)=> {
        if(err){
            console.log("Uh oh something broke", err)
            return
        }
        console.table(res.rows);
    })
}
// Edit - Editing information in the database
//-----> UPDATE movie_villains SET <column_name> = <new_value> WHERE id = <id>;
if(verb === "EDIT"){
    client.query('UPDATE movie_villains SET $1 = $2 WHERE id = $3;', [secondArgument, thirdArgument, fourthArgument], (err, res)=> {
        if(err){
            console.log("Uh oh something broke", err)
            return
        }
        console.table(res.rows);
    })
}
// Add - Adding information into the database
//-----> INSERT INTO movie_villains (<column_name/s>) VALUES (<values>);
if(verb === "ADD"){
    client.query('INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);', [secondArgument, thirdArgument], (err, res)=> {
        if(err){
            console.log("Uh oh something broke", err)
            return
        }
        console.table(res.rows);
    })
}
// Delete - Remove information from the database
//-----> DELETE FROM movie_villains WHERE id = <id>;

if(verb === "DELETE"){
    client.query('DELETE FROM movie_villains WHERE id = $1;', [secondArgument], (err, res)=> {
        if(err){
            console.log("Uh oh something broke", err)
            return
        }
        console.table(res.rows);
    })
}