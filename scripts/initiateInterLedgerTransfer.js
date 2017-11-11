require('.dotenv').config();

const createILTransfer = require('../resources/createInterLedgerTransfer');

// Loads API key from .env file
const API_KEY = process.env.API_KEY;

// Targets Wimpy Eric as user.
const targetUser = "5a030128-84c9-4c14-893c-43ebc5de6eb1";

// retrieve user metadata to determine account preferences
getUser(targetUser, API_KEY)
  .then(getLedgerInfo)
  .catch(error);

function getLedgerInfo(user) {
console.log(user);
console.log('\n ==================== \n');
return new Promise ((res, rej) => {

  const account_preferences = 

  
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
