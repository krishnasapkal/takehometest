//Dependencies
const chalk = require('chalk');

//Database function
const Customer = require('../models').Customer;

//helper function
const readLine = require('../helpers/readLine').readline;

//validation function
const customerValidationSchema = require('../validationSchema/customerSchema');


//Function to add customer
module.exports = async () => {
  try {
    console.log('Enter customer details ')
    let data = await readLine();
    data = data.split('|');
    const customer = {
      Account: data[0].trim(),
      Name: data[1].trim(),
      Address: data[2].trim(),
      PhoneNumber: data[3].trim()
    }
    if (customerValidationSchema(customer)) {
      await Customer.create(customer);
      console.log(chalk.blue('customer added successfully'));
    }
    return

  }
  catch (err) {
    let message
    if (err.errors) {
      message = err.errors[0].message;
    }
    console.log(chalk.red(message || 'Something went wrong'));
    return;
  }
}