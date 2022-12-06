const InputView = require('./InputView');
const OutputView = require('./OutputView');

const INPUT_MESSAGE = {
  purchase: '구입금액을 입력해 주세요',
};

const View = {
  readLottoPurchaseAmount(callback) {
    InputView.readLine(INPUT_MESSAGE.purchase, callback);
  },

  printIssudNumbers(input) {
    input.forEach((number) => OutputView.print(number));
  },

  printError(error) {
    OutputView.printError(error);
  },
};

module.exports = View;
