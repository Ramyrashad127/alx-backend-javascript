const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let fun;

  beforeEach(() => {
    if (!fun) {
      fun = sinon.spy(console);
    }
  });

  afterEach(() => {
    fun.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(fun.log.calledWith('The total is: 120')).to.be.true;
    expect(fun.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(fun.log.calledWith('The total is: 20')).to.be.true;
    expect(fun.log.calledOnce).to.be.true;
  });
});
