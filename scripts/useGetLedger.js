require('dotenv').config();

const getLedger = require('../resources/getLedger');

const API_KEY = process.env.API_KEY;

// Focus on wimpy eric
const ledgerId = "5a03f5b4-7d4c-4772-8193-0d8f9949a8b7";

getLedger(ledgerId, API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err);
}

