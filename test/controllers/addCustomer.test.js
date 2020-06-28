const sinon = require('sinon');
const chai = require('chai');
const proxyquire = require('proxyquire');
const expect = require('chai').expect;


const testData = require('./addCustomer.testdata.json');
const Customer = require('../../models').Customer;
const readLine = require('../../helpers/readLine');
const { func } = require('@hapi/joi');

const sandbox = sinon.createSandbox();
chai.should();

describe('Add customer', function () {

  let createCustomerStub;
  let createStub;
  let readlineStub;
  beforeEach(() => {
    createStub = sandbox.stub(Customer, 'create');
    readlineStub = sandbox.stub(readLine, 'readline');
    consoleStub = sandbox.stub(console, 'log');

    createCustomerStub = proxyquire('../../controllers/addCustomer', {
      '../models': createStub,
      '../helpers/readLine': readlineStub
    });
  });


  afterEach(() => {
    sandbox.restore();
  });

  it('Should add customer succesfully', async function () {
    readlineStub.resolves('10010589|Mr. S Kumar|Flat no. 501, Green View Park,Hinjewandi, Pune|9001045238')
    createStub.resolves(testData.customerValidData)
    const data = await createCustomerStub();
    expect(console.log.called).to.be.true;
  });

  it('Should Print validation Error if data is invalid', async function () {
    readlineStub.resolves('Flat no. 501, Green View Park,Hinjewandi, Pune|9001045238');
    const data = await createCustomerStub();
    expect(console.log.called).to.be.true;
  });

  it('Should handle databse exception', async function () {
    readlineStub.resolves('10010589|Mr. S Kumar|Flat no. 501, Green View Park,Hinjewandi, Pune|9001045238');
    createStub.rejects(testData.dbError)
    const data = await createCustomerStub();
    expect(console.log.called).to.be.true;
  });


});