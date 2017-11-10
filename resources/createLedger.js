const rp = require('request-promise');

module.exports = function createLedger(ledger, API_KEY) {
  return new Promise(createLedgerPromise);

  function createLedgerPromise(res, rej) {
    
    const options = {
      method: 'POST',
      uri: 'https://play.railsbank.com/v1/customer/ledgers',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_KEY,
      },
      body: ledger,
      json: true,
    };
    
    rp(options)
      .then(success)
      .catch(error);
    
    function success(body) {
      console.log("Created User!");
      console.log("=====================");
      console.log(body);
      res(body);
    };
    
    function error(err) {
      console.log("!! ERROR ENCOUNTERED !!");
      console.log("=======================");
      rej(err);
    };
  }
};