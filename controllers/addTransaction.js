//Dependencies
const chalk = require('chalk');

//Database functions
const Transaction = require('../models').Transaction;

//Validation function
const transactionValidationSchema = require('../validationSchema/transactionSchema');

//Helpers
const readLine = require('../helpers/readLine').readline;


module.exports = async () => {
  try {
    console.log('Enter transaction details ')
    let data = await readLine();
    data = data.split('|');
    const transaction = {
      TransactionId: data[0].trim(),
      TransactionDate: data[1].trim(),
      FromAccountId: data[2].trim(),
      ToAccountId: data[3].trim(),
      Amount: data[4].trim()
    }
    if (transactionValidationSchema(transaction)) {
      await Transaction.create(transaction);
      console.log(chalk.blue('Transaction added successfuly'));
    }
    return;

  }
  catch (err) {
    let message;
    if (err.errors) {
      message = err.errors[0].message;
    }
    console.log(chalk.red(message || 'Something went wrong - Please make sure that transaction account exist in database'));
    return;
  }

}