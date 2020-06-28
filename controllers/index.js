const chalk = require('chalk');
const addCustomer = require('./addCustomer');
const addTransaction = require('./addTransaction');
const getResult = require('./getResult');

module.exports = async (id) => {
  switch (Number(id)) {
    case 1: {
    await addCustomer();
      break;
    }
    case 2 : {
     await addTransaction();
      break;
    }
    case 3 : {
      await getResult();
      break;
    }
    case 4 : {
      process.exit()
    }
    default : {
      console.log(chalk.red('Please enter valid input'))
    }
  }
}