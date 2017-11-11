const rp = require('request-promise');

/**
 * returns a promise to create an IBAN for a particular ledger
 * @param {String} ledgerId
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function createIBAN(ledgerId, API_KEY) {
  return new Promise(createIBANPromise);

  function createIBANPromise(res, rej) {
     
    const options = {
      method: 'POST',
      uri: `https://play.railsbank.com/v1/customer/ledgers/${ledgerId}/assign-iban`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error);

    function success(ledger) {
      console.log("Created IBAN ----");
      console.log("=======================");
      res(ledger);
    }

    function error(err) {
      console.log("!! Error Creating IBAN !!");
      console.log("=======================");
      rej(err);
    }
  }
};