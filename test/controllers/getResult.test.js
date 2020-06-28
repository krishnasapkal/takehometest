const sinon = require('sinon');
const chai = require('chai');
const proxyquire = require('proxyquire');
const expect = require('chai').expect;


const testData = require('./result.testdata.json');
const Transaction = require('../../models').Transaction;
const { func } = require('@hapi/joi');

const sandbox = sinon.createSandbox();
chai.should();

describe('Get result', function () {

  let getResultStub;
  let createStub;
  let readlineStub;
  beforeEach(() => {
    findStub = sandbox.stub(Transaction, 'findAll');
    consoleStub = sandbox.stub(console, 'log');

    getResultStub = proxyquire('../../controllers/getResult', {
      '../models': findStub
    });

  });


  afterEach(() => {
    sandbox.restore();
  });

  it('Should print result', async function () {
    findStub.resolves(testData.queryResult)
    await getResultStub();
    expect(console.log.called).to.be.true;
  });

  it('Should handle databse exception', async function () {
    await getResultStub();
    expect(console.log.called).to.be.true;
  });

  
  it('Should handle databse exception with error message', async function () {
    findStub.rejects(testData.dbError);
    await getResultStub();
    expect(console.log.called).to.be.true;
  });


});