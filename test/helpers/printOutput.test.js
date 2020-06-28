const expect = require('chai').expect;
const sinon = require('sinon')

const printOutput = require('../../helpers/printOutput');
const testData = require('./testData.json')

const sandbox = sinon.createSandbox();

describe('Print output', function () {
  let consoleStub;
  beforeEach(function () {
    consoleStub = sandbox.stub(console, 'log');
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('Should work even if data is empty', async function () {
    printOutput(testData.emptygroupedByMonth, testData.groupedByMonth);
    expect(consoleStub.called).to.be.true;
  });

  it('Should Print output', async function () {
    printOutput(testData.groupedByMonth, testData.suspiciousAccounts);
    expect(consoleStub.called).to.be.true;
  });

 


});