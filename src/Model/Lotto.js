const { MESSAGE } = require('../lib/constants/error');
const { RANGE } = require('../lib/constants/system');
const { isRangeArray, isRangeNumberArray, isOverlap } = require('../lib/utils/validation');
const ValidationError = require('../ValidationError');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.split(',');
    this.validate();
  }

  validate() {
    if (!isRangeArray(6, this.#numbers)) {
      throw new ValidationError(MESSAGE.count);
    }
    if (!isRangeNumberArray(RANGE, this.#numbers)) {
      throw new ValidationError(MESSAGE.range);
    }
    if (isOverlap(this.#numbers)) {
      throw new ValidationError(MESSAGE.overlap);
    }
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
