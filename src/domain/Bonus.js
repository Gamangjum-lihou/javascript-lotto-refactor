const ValidationError = require('../error/ValidationError');
const { LOTTO, ERROR } = require('../utils/constants');

class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = Number(number);
  }

  validate(number) {
    if (!this.#isInRange(number)) throw new ValidationError(ERROR.not_range);
  }

  #isInRange(number) {
    return number >= LOTTO.start && number <= LOTTO.end;
  }

  getBonus() {
    return this.#number;
  }
}

module.exports = Bonus;
