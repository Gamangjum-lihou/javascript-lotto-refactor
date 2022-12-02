const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readLottoPrice(callback) {
    Console.readLine('', (value) => {
      callback(value);
    });
  },

  readWinLottoMainNumber(callback) {
    Console.readLine('', (value) => {
      callback(value);
    });
  },

  readWinLottoBonusNumber(callback) {
    Console.readLine('', (value) => {
      callback(value);
    });
  },
};

module.exports = InputView;
