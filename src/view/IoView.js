const { Console } = require('@woowacourse/mission-utils');

const IoView = {
  readPurChase(callback) {
    Console.readLine('구입금액을 입력해 주세요.', (input) => callback(input));
  },
  readWinngNumber(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.', (input) => callback(input));
  },
  readBonusNumber(callback) {
    Console.readLine('보너스 번호를 입력해 주세요.', (input) => callback(input));
  },
  printNumberOfLotto(number) {
    Console.print(`${number}개를 구매했습니다.`);
  },
  printWinningStatistics(winningStatistics) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningStatistics}`);
    Console.print(`4개 일치 (50,000원) - ${winningStatistics}`);
    Console.print(`5개 일치 (1,500,000원) - ${winningStatistics}`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics}`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningStatistics}`);
  },
  printRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  },
  printError(message) {
    Console.print(`[ERROR] ${message}`);
  },
};

module.exports = IoView;
