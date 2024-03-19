const { Client } = require('pg');
// Pool can have many connections => A public website
// Client is meant to only have one connection at a time => Admin panel
const client = new Client({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lightbnb'
});

client.connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack));

const properties = require('./json/properties.json');
const users = require('./json/users.json');
// The functions in this file are all called queries
/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  // If your job is to refactor existing function
  // Ask yourself a couple question about the function itself?
  // How is this function being used?
  // As a developer I need to know what do I need to return from this function so that I dont blow up the app
  // What type of variable should I return? => Object
  // let resolvedUser = null;
  // for (const userId in users) {
  //   const user = users[userId];
  //   if (user && user.email.toLowerCase() === email.toLowerCase()) {
  //     resolvedUser = user;
  //   }
  // }
  // return Promise.resolve(resolvedUser);
  return client.query('Select * From users Where email = $1;', [email])
  // Response.rows will ALWAYS be an array in a select statement
  .then((response)=> response.rows[0])
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return Promise.resolve(users[id]);
};
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  const userId = Object.keys(users).length + 1;
  user.id = userId;
  users[userId] = user;
  return Promise.resolve(user);
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return getAllProperties(null, 2);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {
  const hasFilters = false;

  if () {
    //enumerate the filters and if any are true, turn to true) {
  }

  let whereClause = "WHERE "

  const clauses = [
    "properties.min_price > 10",
    "properties.max_price < 200",
  ]

  whereClause = whereClause + clauses.join(" AND ")

  return client
    .query(
      `
    SELECT * FROM properties LIMIT $1
      
      AND properties.max_pirce < 200
      AND properties.max_pirce < 200
      AND properties.max_pirce < 200
      AND properties.max_pirce < 200
      AND properties.max_pirce < 200

  `,
      [limit]
    )
    .then((result) => result.rows);
};
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;