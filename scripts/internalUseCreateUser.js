const bodyParser = require('body-parser');
require('dotenv').config();

const internalCreateUser = require('../resources/internalCreateUser');
const internalGetCSRF = require('../resources/internalGetCSRF');

console.log(process.env.API_KEY);

const user = {
  "person": {
    "password": "testpassword",
    "username": "newnam6", 
    "name": "new name6",
    "email": "new6@mail.com",
    "date_of_birth": "1990-10-01",
    "telephone": "07123456789"
  },
  "enduser_meta": {
    "primary_account": [],
    "account_ordering": []
  }
}

internalCreateUser(user)
  .then(success)
  .catch(error);

function getToken(response) {
  console.log(response);
}

/*
internalCreateUser(user, process.env.API_KEY)
  .then(get)
  .catch(error);
*/

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}