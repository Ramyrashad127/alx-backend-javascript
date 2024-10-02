// 3-payment.js
const fn = require('./utils');

const my_fun = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const ans = fn.calculateNumber('SUM', totalAmount, totalShipping);
  console.log('The total is: ', ans);
};
module.exports = my_fun;
