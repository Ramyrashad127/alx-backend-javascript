// 1-calcul.js
const my_fun = function calculateNumber(a, b, type) {
  a = Math.round(a);
  b = Math.round(b);
  if (type == 'SUM') return a + b;
  if (type == 'SUBTRACT') return a - b;
  if (type == 'DIVIDE') {
    if (b == 0) return 'Error';
    return a / b;
  }
};
module.exports = my_fun;
