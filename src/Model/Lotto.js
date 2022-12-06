const LottoNumberGenerator = require('../LottonNumberGenerator');

class Lotto {
  #numbers;

  #amountPurchased;

  runAmountPurchasedProcess(input) {
    this.#saveAmountPurchased(input);
    this.#ascendingOrder(this.#generateLottoNumbers());
  }

  #saveAmountPurchased(input) {
    this.#amountPurchased = input;
  }

  #generateLottoNumbers() {
    return Array.from({ length: this.#amountPurchased / 1000 }, () => LottoNumberGenerator.run());
  }

  #ascendingOrder(numbers) {
    this.#numbers = numbers.filter((number) => number.sort((pre, cur) => pre - cur));
  }

  getIssudNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
