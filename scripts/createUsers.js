/**
 * This Script creates the number of defined users as 
 * specified run the script is run.
 * 
 * max number of users is 10.
 * 
 * max value to credit is 10000.
 * 
 * It creates users with dummy data, 
 * creates a ledger account for that user,
 * creates an associated iban for the ledger, 
 * and then credits that ledger with a default balance
 *  or a balance which may be specified by the user
 */

const args = process.argv;
let startValue, users;

if (args.length < 3) {
  console.log('Please provide a number users (1 - 10) to create.')
  console.log('You may also specify an initial starting balance to use (1 to 10000).');

  process.exit(1);
}

users = parseInt(args[2]);

if (typeof users !== 'number' || isNaN(users) || users > 10 || users < 1) {
  console.log('Please provide a number of users between 1 and 10 inclusive.')
  
  process.exit(2);
}

if (args.length === 4) {
  startValue = parseInt(args[3]);

  if (typeof startValue !== 'number' || isNaN(startValue) || startValue > 10000 || startValue < 1) {
    console.log('Please provide a starting balance of between 1 and 10000 inclusive, or accept the default of 10000');
  
    process.exit(3);
  }

} else {
  startValue = 1000;
}

