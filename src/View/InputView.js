const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readLotteryPrice(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', (value) => {
      callback(value);
    });
  },

  readWinLotteryMainNumber(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (value) => {
      callback(value);
    });
  },

  readWinLotteryBonusNumber(mainNumber, callback) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (value) => {
      callback(mainNumber, value);
    });
  },
};

module.exports = InputView;
