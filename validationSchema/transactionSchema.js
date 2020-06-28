const Joi = require('@hapi/joi');
const chalk = require('chalk');

const schema = Joi.object({
  TransactionId: Joi.string().min(11).required(),
  FromAccountId: Joi.string().min(8).max(8).required(),
  ToAccountId: Joi.string().min(8).max(8).required(),
  Amount: Joi.number().min(1).required(),
  TransactionDate: Joi.date().required()
})


module.exports = (data) => {
  const { error } = schema.validate(data);
  if (error) {
    console.log(chalk.red('Validation Error', error.details[0].message));
    return false;
  }
  return true
}