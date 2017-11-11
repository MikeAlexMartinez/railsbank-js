require('dotenv').config();

const getUser = require('../resources/getUser');

const enduserId = "5a030128-84c9-4c14-893c-43ebc5de6eb1";

getUser(enduserId, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}

