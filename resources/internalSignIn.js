const rp = require('request-promise');

/**
 * returns a promise to create a ledger for a particular user
 * @param {Object} person
 * @return {Promise}
 */

module.exports = function internalSignIn(person) {
  return new Promise(iSIP);

  function iSIP(res, rej) {
    
    const options = {
      method: 'POST',
      uri: 'http://c7ee16d0.ngrok.io/apis/sign_in',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: person,
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error)

    function success(body) {
      console.log("SIGN IN SUCCESSFUL ----");
      console.log("=======================");
      console.log(body);

      res(body);
    }

    function error(err) {
      console.log("!! Error Signing In !!");
      console.log("=======================");
      console.log(err.message);
      rej(err);
    }
  }
};