require('dotenv').config();

const getAllUsers = require('../resources/getAllUsers');
const getUser = require('../resources/getUser');
const updateUser = require('../resources/updateUser');
const API_KEY = process.env.API_KEY;

getAllUsers(API_KEY)
  .then(filterUsers)
  .then(retrieveUser)
  .then(useUpdateUser)
  .catch(error);

function filterUsers(users) {
  console.log(users);
  return new Promise(fUP);
  
  function fUP(res, rej) {

    const target_users = ["5a030128-84c9-4c14-893c-43ebc5de6eb1"];
    
    const filteredUsers = users.filter((user) => {
      return target_users.indexOf(user.enduser_id) !== -1;  
    });
    
    res(filteredUsers);
  }

}

function retrieveUser(users) {
  return new Promise((res, rej) => {
    console.log(users[0]);
    const target = users[0];
  
    getUser(target.enduser_id, API_KEY)
      .then((user) => {
        console.log("Retrieved User");
        console.log(user);
        res(user);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

function useUpdateUser(user) {

  console.log(user);
  const person = {
    name: "Wimpy Eric",
    email: "cantona@legend.com"
  };

  updateUser(user.enduser_id, person, API_KEY)
    .then(success)
    .catch(error);
}

function success(body) {
  console.log(body);
}

function error(err) {
  console.log(err);
}