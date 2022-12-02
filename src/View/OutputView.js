const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printCreatedLotteryNumber(lottery, money) {
    Console.print(money);
    Console.print(lottery);
  },

  printResult(result) {
    Console.print(result);
  },

  printMargin() {},

  exit() {
    return Console.close();
  },
};

module.exports = OutputView;
