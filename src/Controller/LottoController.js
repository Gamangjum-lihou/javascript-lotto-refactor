const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Lotto = require('../Model/Lotto');
const Validator = require('../Validator');
const View = require('../VIew');

const AMOUNT = 'checkPurcahseAmount';
const WINNING = 'checkWinningNumbers';
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
    this.#model.saveWinningNumbers();
  }

  #hasErrorOccurredByCheck(input, name) {
    try {
      this.#validator[name](input);
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

  #retry(input) {
    if (input === 'amount') return this.#inputPurchaseAmount();
    if (input === 'winning') return this.#inputWinningNumbers();
  }
}

module.exports = LottoController;
