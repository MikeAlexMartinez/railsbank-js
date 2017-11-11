const rp = require('request-promise');

/**
 * returns a promise to retrieve ledger info for specified ledger id
 * @param {Object} ledgerId
 * @param {String} API_KEY
 * @return {Promise}
 */


module.exports = function getLedger(ledgerId, API_KEY) {
  return new Promise(gLPromise);

  function gLPromise(res, rej) {
    
    const options = {
      method: 'GET',
      uri: `https://play.railsbank.com/v1/customer/ledgers/${ledgerId}`,
      headers: {
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      json: true,
    }

    rp(options)
      .then(success)
      .catch(error)

    function success(body) {
      res(body);
    }

    function error(err) {
      rej(err);
    }
  }
};