require('dotenv').config();

const getBanks = require('./resources/getBanks');

getBanks(process.env.API_KEY)
  .then(success)
  .catch(error);

function success(body) {
  console.log(body);

  const products = body[0].partner_products;  

  products.forEach(function(product) {
    console.log(product)
  });
}

function error(err) {
  console.log(error);
}

