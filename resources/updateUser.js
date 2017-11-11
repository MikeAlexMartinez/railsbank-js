const rp = require('request-promise');

/**
 * returns a promise to create a ledger for a particular user
 * @param {Object} person
 * @param {String} API_KEY
 * @return {Promise}
 */

module.exports = function updateUser(enduserId, person, API_KEY) {
  return new Promise(updateUserPromise);

  function updateUserPromise(res, rej) {
    
    const options = {
      method: 'PUT',
      uri: `https://play.railsbank.com/v1/customer/endusers/${enduserId}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      body: {
        person: person,
      },
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error)

    function success(enduser) {
      console.log("Updated USER ----");
      console.log("=======================");
      console.log(enduser);
      res(enduser);
    }

    function error(err) {
      console.log("!! Error Updaing User !!");
      console.log("=======================");
      console.log(err);
      rej(err);
    }
  }
};