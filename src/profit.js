const R = require('ramda');

const getMaxProfit = (arr) => {
 const result = Math.max(...R.map((x) => R.reduce((a, b) => a > b - x ? a : b - x , 0, R.remove(0, R.indexOf(x , arr) , arr)), arr));
 return result > 0 ? result : - 1;
};

module.exports = {
  getMaxProfit,
};
