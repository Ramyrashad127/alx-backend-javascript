const { expect } = require('chai');
const my_fun = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('it', (done) => {
    my_fun(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});