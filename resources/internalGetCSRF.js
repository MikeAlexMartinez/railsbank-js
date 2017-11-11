const rp = require('request-promise');

/**
 * returns a promise to create a ledger for a particular user
 * @param {Object} person
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function internalGetCSRF(person, API_KEY) {
  return new Promise(iGCP);

  function iGCP(res, rej) {
    
    const options = {
      method: 'GET',
      uri: 'http://c7ee16d0.ngrok.io/apis/csrf_token',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    rp(options)
      .then(success)
      .catch(error)

    function success(response) {
      console.log("Retrieved CSRF Token ----");
      console.log("=======================");
      console.log(response)
      res(response);
    }

    function error(err) {
      console.log("!! Error Retrieving token !!");
      console.log("=======================");
      rej(err);
    }
  }
};