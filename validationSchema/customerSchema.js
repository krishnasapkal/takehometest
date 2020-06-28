//Dependencies
const Joi = require('@hapi/joi');
const chalk = require('chalk');

const schema = Joi.object({
  Account: Joi.string().min(8).max(8).required(),
  Name: Joi.string().min(3).max(30).required(),
  Address: Joi.string().min(3).max(200).required(),
  PhoneNumber: Joi.string().min(10).max(10).required()
})


module.exports = (data) => {
  const { error } = schema.validate(data);
  if (error) {
    console.log(chalk.red('Validation Error', error.details[0].message));
    return false;
  }
  return true

}
