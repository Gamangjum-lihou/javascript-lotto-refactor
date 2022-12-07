const { LOTTO, ERROR } = require('./utils/constants');
const ValidationError = require('./error/ValidationError');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!this.#isFitLength(numbers))
      throw new ValidationError(ERROR.lotto_length);
    if (this.#isDuplicate(numbers))
      throw new ValidationError(ERROR.lotto_duplicate);
  }

  #isFitLength(numbers) {
    return numbers.length === LOTTO.count;
  }

  #isDuplicate(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  getDuplicate(winLotto) {
    return this.#numbers.filter((number) => winLotto.#numbers.includes(number))
      .length;
  }

  hasNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
