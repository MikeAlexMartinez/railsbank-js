const rp = require('request-promise');

/**
 * returns a promise to move money between two ledgers that are assigned
 * the same user.
 * 
 * @param {Object} transaction
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function interLedgerTransfer(transaction, API_KEY) {
  return new Promise(iLTP);

  function iLTP(res, rej) {

    const options = {
      method: 'POST',
      uri: 'https://api.railsbank.com/v1/customer/transactions/inter-ledger',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      body: transaction,
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error);

    function success(enduser) {
      console.log("Transferred Money Successfully ----");
      console.log("=======================");
      res(enduser);
    }

    function error(err) {
      console.log("!! Error Transferring Money !!");
      console.log("=======================");
      rej(err.error);
      rej(err);
    }
  }
};