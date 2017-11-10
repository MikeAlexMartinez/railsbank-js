require('dotenv').config();

const createLedger = require('./resources/createLedger');
const enduserId = require('./users/storage').me.enduser_id;

const ledger = {
  "holder_id": enduserId,
  "partner_product": "ExampleBank-GBP-1",
  "asset_class": "currency",
  "asset_type": "gbp",
  "ledger_type": "ledger-type-single-user",
  "ledger_who_owns_assets": "ledger-assets-owned-by-me",
  "ledger_primary_use_types": ["ledger-primary-use-types-payments"],
  "ledger_t_and_cs_country_of_jurisdiction": "GB"
} 

createLedger(ledger, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err);
}