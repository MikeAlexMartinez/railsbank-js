require('dotenv').config();

const getUser = require('../resources/getUser');

// focus on Wimpy Eric
const enduserId = "5a030128-84c9-4c14-893c-43ebc5de6eb1";

getUser(enduserId, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
  console.log("\n ========================== \n");
  console.log("Account Meta Data")
  body.enduser_meta.accounts.forEach(function(acc) {
    console.log(acc);
  });
}

function error(err) {
  console.log(error);
}

