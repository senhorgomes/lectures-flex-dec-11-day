// request

const request = require('request');
request('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json', (error, response, body)=> {
  console.log(body)
})