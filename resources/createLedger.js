const rp = require('request-promise');

/**
 * returns a promise to create a ledger for a particular user
 * @param {Object} ledger
 * @param {String} API_KEY
 * @return {object} ledger_id
 */

module.exports = function createLedger(ledger, API_KEY) {
  return new Promise(createLedgerPromise);

  function createLedgerPromise(res, rej) {
    
    const options = {
      method: 'POST',
      uri: 'https://play.railsbank.com/v1/customer/ledgers',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      body: ledger,
      json: true,
    };
    
    rp(options)
      .then(success)
      .catch(error);
    
    function success(body) {
      console.log("Created Ledger ----");
      console.log("=====================");
      res(body);
    };
    
    function error(err) {
      console.log("!! ERROR Creating Ledger !!");
      console.log("=======================");
      rej(err);
    };
  }
};