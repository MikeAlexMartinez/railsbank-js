const fs = require('fs');
const rp = require('request-promise');
require('dotenv').config();

const users = require('./users/storage');

const enduser1 = users.user1;
const beneficiary = users.user1.beneficiaries[0].beneficiary_id;

const sendToBeneficiary = {
  "ledger_id": enduser1.ledger_id,
  "beneficiary_id": beneficiary,
  "payment_type": "payment-type-EU-SEPA-Step2",
  "amount": 3
};

const options = {
  method: 'POST',
  uri: 'https://play.railsbank.com/v1/customer/transactions',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': API_KEY,
  },
  body: sendToBeneficiary,
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