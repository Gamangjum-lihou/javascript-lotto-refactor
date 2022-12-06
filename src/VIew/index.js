const InputView = require('./InputView');
const OutputView = require('./OutputView');

const INPUT_MESSAGE = {
  purchase: '구입금액을 입력해 주세요.',
  winning: '당첨 번호를 입력해 주세요.',
};

const View = {
  readLottoPurchaseAmount(callback) {
    InputView.readLine(INPUT_MESSAGE.purchase, callback);
  },

  readLottoWinningNumbers(callback) {
    InputView.readLine(INPUT_MESSAGE.winning, callback);
  },

  printIssudNumbers(input) {
    input.forEach((number) => OutputView.print(number));
  },

  printError(error) {
    OutputView.printError(error);
  },
};

module.exports = View;
