require('dotenv').config();

const getAllUsers = require('../resources/getAllUsers');
const getUser = require('../resources/getUser');

getAllUsers(process.env.API_KEY)
  .then(getUserDetails)
  .catch(error);

function getUserDetails(users) { 
  if (users.length === 0) {
    console.log("No Users to retrieve!");
  } else {
    console.log(`${users.length} users to retrieve!`);
    
    users.forEach(function(user) {
      getUser(user.enduser_id, process.env.API_KEY)
        .then(success)
        .catch(error);
    });
  }

}

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err);
}