const rp = require('request-promise');

/**
 * returns a promise to credit the account specified with the IBAN and 
 * bic_swift by the amount provided. parameters to be passed in transaction
 * object.
 * 
 * @param {Object} transaction
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function creditLedger(transaction, API_KEY) {
  return new Promise(creditLedger);

  function creditLedger(res, rej) {

    const options = {
      method: 'POST',
      uri: 'https://play.railsbank.com/dev/customer/transactions/receive',
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
      console.log("Credited Ledger Successfully ----");
      console.log("=======================");
      res(enduser);
    }

    function error(err) {
      console.log("!! Error Crediting Ledger !!");
      console.log("=======================");
      rej(err);
    }
  }
};