const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Lotto = require('../Model/Lotto');
const Validator = require('../Validator');
const View = require('../VIew');

const AMOUNT = 'checkPurcahseAmount';
const WINNING = 'checkWinningNumbers';
const Bonus = 'checkBonusNumber';
class LottoController {
  #model;

  #view;

  #validator;

  constructor() {
    this.#model = new Lotto();
    this.#view = View;
    this.#validator = Validator;
  }

  start() {
    this.#inputPurchaseAmount();
  }

  #inputPurchaseAmount() {
    this.#view.readLottoPurchaseAmount(this.#readPurchaseAmount.bind(this));
  }

  #readPurchaseAmount(input) {
    if (this.#hasErrorOccurredByCheck(input, AMOUNT)) return this.#retry('amount');
    this.#model.runAmountPurchasedProcess(input);
    this.#view.printIssudNumbers(this.#model.getIssudNumbers());
    this.#inputWinningNumbers();
  }

  #inputWinningNumbers() {
    this.#view.readLottoWinningNumbers(this.#readWinningNumbers.bind(this));
  }

  #readWinningNumbers(input) {
    if (this.#hasErrorOccurredByCheck(input, WINNING)) return this.#retry('winning');
    this.#model.saveWinningNumbers(input);
    this.#inputBonusNumber(input);
  }

  #inputBonusNumber(winning) {
    this.#view.readLottoBonusNumber((input) => this.#readBonusNumber({ input, winning }));
  }

  #readBonusNumber({ input, winning }) {
    if (this.#hasErrorOccurredByCheck(input, Bonus, winning)) return this.#retry('bonus', winning);
    this.#model.saveBonusNumbers(input);
    this.#model.calculateResult();
    this.#view.printResult(this.#model.getResult());
  }

  #hasErrorOccurredByCheck(input, name, winning = null) {
    try {
      this.#validator[name](input, winning);
    } catch (error) {
      return this.#handleError(error);
    }
  }

  #handleError(error) {
    if (error instanceof ValidationError) {
      this.#view.printError(new ReadError('Validation Error', error));
      return true;
    }
    throw error;
  }

  #retry(input, winning = null) {
    if (input === 'amount') return this.#inputPurchaseAmount();
    if (input === 'winning') return this.#inputWinningNumbers();
    if (input === 'bonus') return this.#inputBonusNumber(winning);
  }
}

module.exports = LottoController;
