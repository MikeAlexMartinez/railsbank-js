require('dotenv').config();

const getUser = require('../resources/getUser');

// Focus on wimpy eric
const enduserId = "5a0447f9-f3f7-4551-bb13-0795692fec1c";

getUser(enduserId, process.env.API_KEY)
  .then(getLedgerInfo)
  .catch(error);

function getLedgerInfo(user) {
  console.log(user);
  return new Promise ((res, rej) => {

    const ledgers = user.ledgers;
    let ledgersDetailed = [];

    // check user has ledgers
    if (ledgers.length < 1) {
      rej(Error(`!! ERROR: no ledgers found for user ${enduserId} !!\n!! ERROR: Please create a ledger first !!`));
    }

    ledgers.forEach((ledgerId) => {
      let ledgerDetail = {ledgerId: ledgerId};

      
    });


  });
}

function error(err) {
  console.log(err);
}

