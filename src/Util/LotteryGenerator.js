const { Random } = require('@woowacourse/mission-utils');
const { INFO } = require('../Constants');

const LotteryGenerator = {
  generateLottery(length) {
    return Array.from({ length }, () => {
      const numbers = Random.pickUniqueNumbersInRange(INFO.lotto_start, INFO.lotto_end, INFO.lotto_size);
      return numbers.sort((prev, cur) => prev - cur);
    });
  },
};

module.exports = LotteryGenerator;
