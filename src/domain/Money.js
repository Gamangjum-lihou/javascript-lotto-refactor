const { LOTTO, ERROR } = require('../utils/constants');
const ValidationError = require('../error/ValidationError');

class Money {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    if (!this.#isUnit(money) || this.#isLimit(money)) {
      throw new ValidationError(ERROR.not_number);
    }
  }

  #isUnit(money) {
    return money % LOTTO.price === 0 && money >= LOTTO.price;
  }

  #isLimit(money) {
    return money > LOTTO.limit;
  }

  getLottoCount() {
    return this.#money / LOTTO.price;
  }
}

module.exports = Money;
