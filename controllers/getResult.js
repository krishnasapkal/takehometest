const chalk = require('chalk');

const { Op, fn } = require("sequelize");
const Transaction = require('../models').Transaction;
const Customer = require('../models').Customer;

const printOutput = require('../helpers/printOutput');
const filterData = require('../helpers/filterOutput');

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




