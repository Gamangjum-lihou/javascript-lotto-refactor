const { INDEX, PRIZE } = require('../Constants');

const MATCH = Object.freeze({
  six: 6,
  five: 5,
  four: 4,
  three: 3,
});

const TotalGenerator = {
  generateTotal(winList) {
    const rank = [0, 0, 0, 0, 0, 0];
    const rankPrize = Object.values(PRIZE);
    let total = 0;
    winList.forEach(({ mainCount, bonusCount }) => {
      const index = TotalGenerator.getIndex(mainCount, bonusCount);
      rank[index] += 1;
      total += rankPrize[index];
    });
    return { rank, total };
  },

  getIndex(main, bonus) {
    if (main === MATCH.six) return INDEX.first;
    if (main === MATCH.five && bonus) return INDEX.second;
    if (main === MATCH.five && !bonus) return INDEX.third;
    if (main === MATCH.four) return INDEX.fourth;
    if (main === MATCH.three) return INDEX.fifth;
    return INDEX.fail;
  },
};

module.exports = TotalGenerator;
