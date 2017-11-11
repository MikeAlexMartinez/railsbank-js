const internalSignIn = require('../resources/internalSignIn');

const user = {
  "password": "testpassword",
  "username": "newnam7",
}

internalSignIn(user)
  .then(success)
  .catch(error);

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