require('dotenv').config();

const getTransaction = require('./resources/getTransaction');
const users = require('./users/storage');

const transactionId = users.user1.transactions[0];

getTransaction(transactionId, process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(error);
}

