const fs = require('fs');
const rp = require('request-promise');
require('dotenv').config();

const users = require('./users/storage');

const iban = 	users.user1.account.iban;
const bic = 	users.user1.account.bic_swift;

const data = {
  'amount': 100,
  'bic_swift': bic,
  'iban': iban
}

const options = {
  method: 'POST',
  uri: 'https://play.railsbank.com/dev/customer/transactions/receive',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': process.env.API_KEY,
  },
  body: data,
  json: true,
};

rp(options)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
};

function error(err) {
  console.log(err.body);
};