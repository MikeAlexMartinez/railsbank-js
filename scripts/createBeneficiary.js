const fs = require('fs');
const rp = require('request-promise');
require('dotenv').config();

const users = require('./users/storage');

const enduser1 = users.user1;
const enduser2 = users.user2;

const beneficiary = {
  "holder_id": enduser1.enduser_id,
  "asset_class": "currency",
  "asset_type": "eur",
  "iban": enduser2.account.iban,
  "bic_swift": enduser2.account.bic_swift,
  "person": {
    "name": "Bob",
    "email": "bob@example.net",
    "date_of_birth": "1981-02-03",
    "telephone": "0012345678912",
    "address": {
      "address_iso_country": "FRA"
      },
    "nationality": [
      "Swiss"
      ],
    "country_of_residence": [
      "FRA"
      ]
    }
};

const options = {
  method: 'POST',
  uri: 'https://play.railsbank.com/v1/customer/beneficiaries',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': process.env.API_KEY,
  },
  body: beneficiary,
  json: true,
};

rp(options)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
};

function error(err) {
  console.log("75" + err);
};