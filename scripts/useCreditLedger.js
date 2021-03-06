require('dotenv').config();

const getUser = require('../resources/getUser');
const getLedger = require('../resources/getLedger');
const creditLedger = require('../resources/creditLedger');

const API_KEY = process.env.API_KEY;

// Focus on wimpy eric
const enduserId = "5a030128-84c9-4c14-893c-43ebc5de6eb1";

getUser(enduserId, API_KEY)
  .then(getLedgerInfo)
  .then(creditLedgers)
  .catch(error);

function getLedgerInfo(user) {
  console.log(user);
  return new Promise ((res, rej) => {

    const ledgers = user.ledgers;
    let count = ledgers.length;
    let ledgersDetailed = [];

    // check user has ledgers
    if (ledgers.length < 1) {
      rej(Error(`!! ERROR: no ledgers found for user ${enduserId} !!\n!! ERROR: Please create a ledger first !!`));
    }

    ledgers.forEach((ledger) => {
      const ledgerId = ledger.ledger_id;
      let ledgerDetail = {ledgerId: ledgerId};

      getLedger(ledgerId, API_KEY)
        .then((detail) => {
          ledgerDetail["detail"] = detail;

          ledgersDetailed.push(ledgerDetail);

          if (ledgersDetailed.length === count) {
            res(ledgersDetailed);
          }
        })
        .catch(error);
    });

    
  });
}

function creditLedgers(ledgers) {

  
  ledgers.forEach((l) => { 
    
    const transaction = {
      amount: 1000,
      bic_swift: l.detail.bic_swift,
      iban: l.detail.iban,
    }

    console.log(transaction);

    creditLedger(transaction, API_KEY)
      .then(success)
      .catch(error);
  });
}

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err.error);
}

