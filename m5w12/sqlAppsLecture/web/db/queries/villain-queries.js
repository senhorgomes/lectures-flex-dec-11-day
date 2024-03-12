const client = require('../connection');

//We are creating a function that we can use, in our server.js file
const fetchAllVillains = () => {
    // return []
    return client.query('SELECT * FROM movie_villains;')
        // .then((response)=> res.json(response.rows))
        // How do we pass information to an ejs file?
        //Is the response from the database. The database is replying back to the server
        .then((response) => {
            return response.rows;
        })
}

const deleteVillains = (villainId) => {
    return client.query('DELETE FROM movie_villains WHERE id = $1;', [villainId])
        // .then((response)=> res.json(response.rows))
        // How do we pass information to an ejs file?
        //Is the response from the database. The database is replying back to the server
        .then((response) => {
            return response;
        })
}

module.exports = { fetchAllVillains, deleteVillains }