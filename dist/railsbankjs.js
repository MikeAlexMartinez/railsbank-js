const createIBAN = require('../resources/createIBAN');
const createLedger = require('../resources/createLedger');
const createUser = require('../resources/createUser');
const creditLedger = require('../resources/creditLedger');
const getIBAN = require('../resources/getIBAN');
const getBanks = require('../resources/getBanks');
const getTransaction = require('../resources/getTransaction');
const getUser = require('../resources/getUser');

module.exports = function railsbankjs() {
    
    return {
        createIBAN: createIBAN,
        createLedger: createLedger,
        createUser: createUser,
        creditLedger: creditLedger,
        getIBAN: getIBAN,
        getBanks: getBanks,
        getTransaction: getTransaction,
        getUser: getUser
    }
};