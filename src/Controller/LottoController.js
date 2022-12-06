const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Lotto = require('../Model/Lotto');
const Validator = require('../Validator');
const View = require('../VIew');

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
    if (this.#hasErrorOccurredByCheck(input)) return this.#inputPurchaseAmount();
    this.#model.runAmountPurchasedProcess(input);
    this.#view.printIssudNumbers(this.#model.getIssudNumbers());
  }

  #hasErrorOccurredByCheck(input) {
    try {
      this.#validator.checkPurcahseAmount(input);
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
}

module.exports = LottoController;
