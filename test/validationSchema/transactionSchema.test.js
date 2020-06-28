const chai = require('chai');
const sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

const validateTransaction = require('../../validationSchema/transactionSchema');
const testData = require('./transaction.testData.json')

describe('Transaction Validation', function () {
  it('Should return true for valid data', async function () {
    const output = validateTransaction(testData.transactionValidData);
    output.should.be.true;
  });

  it('Should return false for invalid data', async function () {
    const output = validateTransaction(testData.transactionInValidData);
    output.should.be.false;
  });


});