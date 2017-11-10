require('dotenv').config();

const createUser = require('./resources/createUser');
const user = require('./users/storage').me;

createUser(user, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}