const rp = require('request-promise');

module.exports = function getAllUsers(API_KEY) {
  return new Promise(getAllUsersPromise);

  function getAllUsersPromise(res, rej) {
    
    const options = {
      method: 'GET',
      uri: `https://play.railsbank.com/v1/customer/endusers`,
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