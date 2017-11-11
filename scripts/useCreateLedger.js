require('dotenv').config();

const createLedger = require('../resources/createLedger');
const getAllUsers = require('../resources/getAllUsers');

getAllUsers(process.env.API_KEY)
  .then(filterUsers)
  .then(createLedgers)
  .catch(error);

function filterUsers(users) {
  return new Promise(fUP);
  
  function fUP(res, rej) {

    // Focus on Wimpy Eric
    const target_users = ["5a071c11-799a-499a-b209-5ac6e7a255b3"];
    
    const filteredUsers = users.filter((user) => {
      return target_users.indexOf(user.enduser_id) !== -1;  
    });
    
    res(filteredUsers);
  }

}

function createLedgers(users) {
  const user = users[0];
  console.log(user);
  const ledger = new Ledger(user.enduser_id);
  console.log(ledger);

  createLedger(ledger, process.env.API_KEY)
    .then(success)
    .catch(error);

}

function Ledger(enduser_id) {
  this.holder_id = enduser_id;
  this.partner_product = "ExampleBank-EUR-1";
  this.asset_class = "currency";
  this.asset_type = "eur";
  this.ledger_type = "ledger-type-single-user";
  this.ledger_who_owns_assets = "ledger-assets-owned-by-me";
  this.ledger_primary_use_types = ["ledger-primary-use-types-payments"];
  this.ledger_t_and_cs_country_of_jurisdiction = "GB";
}

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err);
}