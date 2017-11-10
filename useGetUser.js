require('dotenv').config();

const getUser = require('./resources/getUser');
const enduserId = require('./users/storage').me.enduser_id;

getUser(enduserId, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}

