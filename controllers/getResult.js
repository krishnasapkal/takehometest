//Dependencies
const chalk = require('chalk');

//Datanase functions
const { Op, fn } = require("sequelize");
const Transaction = require('../models').Transaction;
const Customer = require('../models').Customer;


//Helper functions 
const printOutput = require('../helpers/printOutput');
const filterData = require('../helpers/filterOutput');


//Make output function
module.exports = async () => {
  try {
    const transactionsData = await getData();
    const [groupedData, suspiciousAccounts] = filterData(transactionsData);
    printOutput(groupedData, suspiciousAccounts);
  }
  catch (err) {
    let message;
    if (err.errors) {
      message = err.errors[0].message;
    }
    console.log(chalk.red(message || 'Failed to print result'));
  }

}


//Function to query database
const getData = () => {
  return Transaction.findAll({
    include: [{
      model: Customer,
      as: 'ToAccount'
    },
    {
      model: Customer,
      as: 'FromAccount'
    }
    ],
    where: {
      [Op.and]: {
        '$ToAccount.PhoneNumber$': {
          [Op.col]: 'FromAccount.PhoneNumber'
        },
        '$ToAccount.Address$': {
          [Op.col]: 'FromAccount.Address'
        }
      }
    },
    raw: true,
    nest: true
  });
}




