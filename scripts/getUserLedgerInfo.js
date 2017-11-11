require('dotenv').config();

const getUser = require('../resources/getUser');
const getLedger = require('../resources/getLedger');

const API_KEY = process.env.API_KEY;

// Focus on wimpy eric
const enduserId = "5a030128-84c9-4c14-893c-43ebc5de6eb1";

getUser(enduserId, API_KEY)
  .then(getLedgerInfo)
  .catch(error);

function getLedgerInfo(user) {
  console.log(user);
  console.log('\n ==================== \n');
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
            console.log(ledgersDetailed);
          }
        })
        .catch(error);
    });
  });
}

function error(err) {
  console.error(err);
}