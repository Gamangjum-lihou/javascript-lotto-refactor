const { INDEX } = require('../Constants');

const getTotal = {
  calculate(winList) {
    const rank = [0, 0, 0, 0, 0, 0];
    const rankPrize = [2000000000, 30000000, 1500000, 50000, 5000, 0];
    let total = 0;
    winList.forEach(({ main, bonus }) => {
      const index = getTotal.getIndex(main, bonus);
      rank[index] += 1;
      total += rankPrize[index];
    });
    return { rank, total };
  },

  getIndex(main, bonus) {
    if (main === 6) return INDEX.first;
    if (main === 5 && bonus) return INDEX.second;
    if (main === 5 && !bonus) return INDEX.third;
    if (main === 4) return INDEX.fourth;
    if (main === 3) return INDEX.fifth;
    return INDEX.fail;
  },
};

module.exports = getTotal;
