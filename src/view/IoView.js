const { Console } = require('@woowacourse/mission-utils');
const errorHandler = require('../ErrorHandler');

const IoView = {
  readPurChase(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      errorHandler(callback, IoView.readPurChase, input);
    });
  },
  readWinngNumber(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      errorHandler(callback, IoView.readWinngNumber, input);
    });
  },
  readBonusNumber(callback) {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      errorHandler(callback, IoView.readBonusNumber, input);
    });
  },
  printPurChaseList(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  },
  printWinningStatistics(winningStatistics) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningStatistics[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningStatistics[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningStatistics[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningStatistics[4]}개`);
  },
  printRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
    Console.close();
  },
};

module.exports = IoView;
