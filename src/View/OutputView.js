const { Console } = require('@woowacourse/mission-utils');
const { INDEX } = require('../Constants');

const MESSAGE = Object.freeze({
  first: '6개 일치 (2,000,000,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  fifth: '3개 일치 (5,000원) - ',
});

const OutputView = {
  printCreatedLotteryNumber(lotteries, lotteryAmount) {
    Console.print(`\n${lotteryAmount}개를 구매했습니다.`);
    lotteries.forEach((lottery) => {
      const RegExp = /,/gi;
      Console.print(`[${lottery.toString().replace(RegExp, ', ')}]`);
    });
  },

  printResult(rank) {
    Console.print('\n당첨 통계\n---');
    Console.print(`${MESSAGE.fifth}${rank[INDEX.fifth]}개`);
    Console.print(`${MESSAGE.fourth}${rank[INDEX.fourth]}개`);
    Console.print(`${MESSAGE.third}${rank[INDEX.third]}개`);
    Console.print(`${MESSAGE.second}${rank[INDEX.second]}개`);
    Console.print(`${MESSAGE.first}${rank[INDEX.first]}개`);
  },

  printMargin(margin) {
    Console.print(`총 수익률은 ${margin}%입니다`);
  },

  exit() {
    return Console.close();
  },
};

module.exports = OutputView;
