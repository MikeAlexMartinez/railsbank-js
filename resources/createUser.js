const rp = require('request-promise');

/**
 * returns a promise to create a ledger for a particular user
 * @param {Object} person
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function createUser(person, API_KEY) {
  return new Promise(createUserPromise);

  function createUserPromise(res, rej) {
    
    const options = {
      method: 'POST',
      uri: 'https://play.railsbank.com/v1/customer/endusers',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      body: person,
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error)

    function success(enduser) {
      console.log("Created USER ----");
      console.log("=======================");
      console.log(enduser);
      res(enduser);
    }

    function error(err) {
      console.log("!! Error Creating User !!");
      console.log("=======================");
      console.log(err);
      rej(err);
    }
  }
};