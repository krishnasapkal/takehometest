const chalk = require('chalk');
const Customer = require('../models').Customer;
const readLine = require('../helpers/readLine');


module.exports = async () => {
  console.log('Enter customer details ')
   let data = await readLine();
    data = data.split('|');
  const customer = {
    Account : data[0].trim(),
    Name : data[1].trim(),
    Address : data[2].trim(),
    PhoneNumber : data[3].trim()
  }
  const dbRes = await Customer.create(customer);
  console.log(chalk.blue('customer added'));
  return;
}