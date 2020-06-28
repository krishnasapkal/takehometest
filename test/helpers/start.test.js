const expect = require('chai').expect;
const sinon = require('sinon')

const start = require('../../helpers/startText');


const sandbox = sinon.createSandbox();
describe('Should execute start function', function () {
  let consoleStub;
  beforeEach(function () {
    consoleStub = sandbox.stub(console, 'log');
  });
  afterEach(() => {
    sandbox.restore();
  });
  it('Start should print the start text on the command liness', function () {
    start();
    expect(consoleStub.called).to.be.true;
  });

});