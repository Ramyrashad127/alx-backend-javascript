// tests
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi', () => {
    const obj = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(obj.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(obj.calculateNumber.callCount).to.be.equal(1);
    obj.calculateNumber.restore();
  });
});
