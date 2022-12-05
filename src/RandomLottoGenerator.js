const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./utils/constants');

const RandomLottoGenerator = {
  generate() {
    const { start, end, count } = LOTTO;
    const numbers = Random.pickUniqueNumbersInRange(start, end, count);

    return RandomLottoGenerator.sort(numbers);
  },

  sort(numbers) {
    return numbers.sort((num1, num2) => num1 - num2);
  },
};

module.exports = RandomLottoGenerator;
