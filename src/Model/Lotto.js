const LottoNumberGenerator = require('../LottonNumberGenerator');

class Lotto {
  #numbers;

  #bounsNumber;

  #winningNumbers;

  #amountPurchased;

  #result;

  constructor() {
    this.#result = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      rateOfReturn: 0,
    };
  }

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

  saveWinningNumbers(input) {
    this.#winningNumbers = input;
  }

  saveBonusNumbers(input) {
    this.#bounsNumber = input;
  }

  getIssudNumbers() {
    return this.#numbers;
  }

  // 시간부족

  calculateResult() {
    this.#numbers.forEach((number) => {
      const result = this.#winningNumbers.split(',').reduce((acc, cur, index) => {
        if (number.includes(Number(cur))) acc += 1;
        return acc;
      }, 0);
      this.#result[result] !== undefined && (this.#result[result] += 1);
    });
  }

  getResult() {
    return this.#result;
  }
}

module.exports = Lotto;
