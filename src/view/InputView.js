const { Console } = require('@woowacourse/mission-utils');
const NumberValidator = require('./validator/NumberValidator');
const { MESSAGE } = require('../utils/constants');
const handleError = require('../utils/handleError');
const LottoController = require('../LottoController');
const WinNumberValidator = require('./validator/WinNumberValidator');

class InputView {
  #lottoController = new LottoController();

  inputMoney() {
    Console.readLine(MESSAGE.start, (input) => {
      handleError(() => NumberValidator.validate(input), this.inputMoney);

      this.#lottoController.buyLotto(input);
      this.inputWinNumbers();
    });
  }

  inputWinNumbers() {
    Console.readLine(MESSAGE.win, (input) => {
      handleError(
        () => WinNumberValidator.validate(input),
        this.inputWinNumbers,
      );
      this.#lottoController.inputWinNumbers(input);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.bonus, (input) => {
      handleError(() => NumberValidator.validate(input), this.inputBonusNumber);

      this.#lottoController.inputBonusNumber(input);
      this.#lottoController.getStatics();
      Console.close();
    });
  }
}

module.exports = InputView;
