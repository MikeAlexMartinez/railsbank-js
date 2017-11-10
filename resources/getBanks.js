const rp = require('request-promise');

module.exports = function getBanks(API_KEY) {
  return new Promise(getBanksPromise);

  function getBanksPromise(res, rej) {
    
    const options = {
      method: 'GET',
      uri: `https://play.railsbank.com/v1/customer/partners`,
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