const rp = require('request-promise');

module.exports = function createUser(person, API_KEY) {
  return new Promise(createUserPromise);

  function createUserPromise(res, rej) {
    
    const options = {
      method: 'POST',
      uri: 'https://play.railsbank.com/v1/customer/endusers',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': process.env.API_KEY,
      },
      body: person,
      json: true,
    };

    rp(options)
      .then(success)
      .catch(error)

    function success(body) {
      console.log("Created USER ----");
      console.log(body);
      res(body);
    }

    function error(err) {
      console.log("!! Error Creating User !!");
      rej(err);
    }
  }
};