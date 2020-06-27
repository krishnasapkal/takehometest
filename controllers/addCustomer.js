const chalk = require('chalk');
const Customer = require('../models').Customer;


module.exports = async (data) => {
  data = data.split(' ');
  const customer = {
    Account : data[0],
    Name : data[1],
    Address : data[2],
    PhoneNumber : data[3]
  }
  const dbRes = await Customer.create({});
  console.log(chalk.blue('customer added'));
}