require('dotenv').config();

const createIBAN = require('../resources/createIBAN');

console.log(process.env.API_KEY);

const targetLedger = "5a06c8c6-362c-4769-b2a7-a94ce54ecfb6";

createIBAN(targetLedger, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err);
}