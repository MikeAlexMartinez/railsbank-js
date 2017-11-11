require('dotenv').config();

const internalGetCSRF = require('../resources/internalGetCSRF');

console.log(process.env.API_KEY);


internalGetCSRF()
  .then(success)
  .catch(error);


function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}