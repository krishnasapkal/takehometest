const chai = require('chai');
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

const validateCustomer = require('../../validationSchema/customerSchema');
const testData = require('./customer.testData.json')

describe('Customer Validation', function () {
  it('Should return true for valid data', async function () {
    const output = validateCustomer(testData.customerValidData);
    output.should.be.true;
  });

  it('Should return false for invalid data', async function () {
    const output = validateCustomer(testData.customerInvalidData);
    output.should.be.false;
  });


});