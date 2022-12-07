const { MESSAGE } = require('../lib/constants/error');
const { RANGE } = require('../lib/constants/system');
const { isRangeNumber, isNumber } = require('../lib/utils/validation');
const ValidationError = require('../ValidationError');

class Bonus {
  #bonus;

  constructor(bonus) {
    this.#bonus = Number(bonus);
    this.validate();
  }

  validate() {
    if (!isNumber(this.#bonus)) {
      throw new ValidationError(MESSAGE.number);
    }

    if (!isRangeNumber(RANGE, this.#bonus)) {
      throw new ValidationError(MESSAGE.range);
    }
  }

  // TODO: 추가 기능 구현
  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
