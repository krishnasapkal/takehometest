const sinon = require('sinon');
const chai = require('chai');
const proxyquire = require('proxyquire');
const expect = require('chai').expect;


const testData = require('./addTransaction.testdata.json');
const Transaction = require('../../models').Transaction;
const readLine = require('../../helpers/readLine');
const { func } = require('@hapi/joi');

const sandbox = sinon.createSandbox();
chai.should();

describe('Add Transaction', function () {

  let createTransactionStub;
  let createStub;
  let readlineStub;
  beforeEach(() => {
    createStub = sandbox.stub(Transaction, 'create');
    readlineStub = sandbox.stub(readLine, 'readline');
    consoleStub = sandbox.stub(console, 'log');

    createTransactionStub = proxyquire('../../controllers/addTransaction', {
      '../models': createStub,
      '../helpers/readLine': readlineStub
    });
  });


  afterEach(() => {
    sandbox.restore();
  });

  it('Should add transaction succesfully', async function () {
    readlineStub.resolves('T0175896345|10-Jan-20|10010589|80074567|100000')
    createStub.resolves(testData.transactionInValidData)
     await createTransactionStub();
    expect(console.log.called).to.be.true;
  });

  it('Should Print validation Error if data is invalid', async function () {
    readlineStub.resolves('Flat no. 501, Green View Park,Hinjewandi, Pune|9001045238');
    await createTransactionStub();
    expect(console.log.called).to.be.true;
  });

  it('Should handle databse exception', async function () {
    readlineStub.resolves('T0175896345|10-Jan-20|10010589|80074567|100000');
    createStub.rejects(testData.dbError)
    await createTransactionStub();
    expect(console.log.called).to.be.true;
  });


});