require('dotenv').config();

const createUser = require('../resources/createUser');

console.log(process.env.API_KEY);

const user = {
  "person": {
    "name": "Franco Manca",
    "email": "FrancoManca@email.com",
    "date_of_birth": "1990-10-01",
    "telephone": "07123456789"
  },
  "enduser_meta": {
    "primary_account": [],
    "account_ordering": []
  }
}

createUser(user, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}