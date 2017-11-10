const rp = require('request-promise');

/**
 * returns a promise to retrieve an IBAN from a particular ledger
 * @param {String} ledgerId
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function getIBAN(ledgerId, API_KEY) {
  return new Promise(getIBANPromise);

  function getIBANPromise(res, rej) {
     
    const options = {
      method: 'GET',
      uri: `https://play.railsbank.com/v1/customer/ledgers/${ledger}`,
      headers: {
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error);

    function success(ledgerInfo) {
      console.log("Retreived IBAN ----");
      console.log("=======================");
      res(ledgerInfo);
    }

    function error(err) {
      console.log("!! Error Retreiving IBAN !!");
      console.log("=======================");
      rej(err);
    }
  }
};