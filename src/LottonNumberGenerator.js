const { Random } = require('@woowacourse/mission-utils');

const LottoNumberGenerator = {
  run() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

module.exports = LottoNumberGenerator;
