const ValidationError = require('../error/ValidationError');
const { LOTTO, ERROR } = require('../utils/constants');

class Bonus {
  #number;

  constructor(bonus, win) {
    this.validate(bonus, win);
    this.#number = Number(bonus);
  }

  validate(bonus, win) {
    if (win.hasNumber(bonus)) throw new ValidationError(ERROR.bonus_duplicate);
    if (!this.#isInRange(bonus)) throw new ValidationError(ERROR.not_range);
  }

  #isInRange(number) {
    return number >= LOTTO.start && number <= LOTTO.end;
  }

  getBonus() {
    return this.#number;
  }
}

module.exports = Bonus;
