const fs = require('fs');
const rp = require('request-promise');
require('dotenv').config();

const users = require('./users/storage');

const ledger = 	users.user1.ledger_id;

const options = {
  method: 'GET',
  uri: `https://play.railsbank.com/v1/customer/ledgers/${ledger}`,
  headers: {
    'Accept': 'application/json',
    'Authorization': process.env.API_KEY,
  },
  json: true,
};

rp(options)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
};

function error(err) {
  console.log(err);
};