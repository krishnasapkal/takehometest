const chai = require('chai');
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

const filterOutPut = require('../../helpers/filterOutput');
const testData = require('./testData.json')

describe('Filter output', function () {

  it('Should return filtered output', async function () {
    const output = filterOutPut(testData.queryResult);
    output.should.be.deep.equal([testData.groupedByMonth, testData.suspiciousAccounts]);
  });

  it('Should return empty arra if query result it empty', async function () {
    const output = filterOutPut(testData.emptyQueryResult);
    output.should.be.deep.equal([testData.emptygroupedByMonth, testData.emptySuspiciousAccounts]);
  })



});