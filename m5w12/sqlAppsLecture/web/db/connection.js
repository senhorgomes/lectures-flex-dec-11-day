const { Client } = require('pg');
// Pool AND Client
// // PG connection

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // If you're hosting this on someplace else
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database:process.env.DB_DATABASE
}

const client = new Client(config)

client.connect(()=>{
    console.log("Connection successful!");
})

module.exports = client;