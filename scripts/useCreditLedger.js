require('dotenv').config();

const getUser = require('../resources/getUser');

// Focus on wimpy eric
const enduserId = "5a030128-84c9-4c14-893c-43ebc5de6eb1";

getUser(enduserId, process.env.API_KEY)
  .then(getLedgerInfo)
  .catch(error);

function getLedgerInfo(user) {
  console.log(user);
  return new Promise ((res, rej) => {

    // check 
    if (user.ledgers.length < 1) {
      rej(Error(`!! ERROR: no ledgers found for user ${enduser_id} !!\n
                !! ERROR: Please create a ledger first !!`));
    }



  });
}

function error(err) {
  console.log(error);
}

