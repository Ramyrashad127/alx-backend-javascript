// tests
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('individual tc', () => {
    const my_fun = sinon.spy(console);
    const dummy = sinon.stub(Utils, 'calculateNumber');

    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(my_fun.log.calledWith('The total is: 10')).to.be.true;
    expect(my_fun.log.callCount).to.be.equal(1);
    dummy.restore();
    my_fun.log.restore();
  });
});
