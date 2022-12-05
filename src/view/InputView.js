const { Console } = require('@woowacourse/mission-utils');
const { validate } = require('./validator/NumberValidator');
const { MESSAGE } = require('../utils/constants');
const handleError = require('../utils/handleError');
const LottoController = require('../LottoController');

class InputView {
  #lottoController = new LottoController();

  inputMoney() {
    Console.readLine(MESSAGE.start, (input) => {
      handleError(() => validate(input), this.inputMoney);
      this.#lottoController.buyLotto(input);
      this.inputWinNumbers();
    });
  }

  inputWinNumbers() {
    Console.readLine(MESSAGE.start, (input) => {
      handleError(() => validate(input), this.inputMoney);
      this.#lottoController.buyLotto(input);
      this.inputWinNumbers();
    });
  }
}

module.exports = InputView;
