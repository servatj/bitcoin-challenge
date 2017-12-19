const expect = require('expect.js');
const profit = require('../src/profit');

describe('bitcoin profit maximisation', () => {
  it('returns -1 if there is no profit', () => {
    const maxProfit = profit.getMaxProfit([45, 45, 45, 45, 45, 45, 45]);
     expect(maxProfit).to.equal(-1);
  });

  it('returns 16 for [45, 24, 35, 31, 40, 38, 11]', () => {
    const maxProfit = profit.getMaxProfit([45, 24, 35, 31, 40, 38, 11]);
    expect(maxProfit).to.equal(16);
  });

  it('returns 139 for [45, 24, 35, 31, 40, 38, 11, 13, 46, 64, 150]', () => {
    const maxProfit = profit.getMaxProfit([45, 24, 35, 31, 40, 38, 11, 13, 46, 64, 150]);
    expect(maxProfit).to.equal(139);
  });
});
