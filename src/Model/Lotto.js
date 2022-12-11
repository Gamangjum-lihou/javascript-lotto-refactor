const LottoNumberGenerator = require('../LottonNumberGenerator');

const Calculator = require("./Util/Calculator")

class Lotto {
  #numbers;

  #amountPurchased;

  #calculator

  constructor() {
    this.#calculator = new Calculator()

    this.#numbers = {
      issud:0,
      bonus:0,
      winning:0,
    }
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
    this.#numbers.issud = numbers.filter((number) => number.sort((pre, cur) => pre - cur));
  }

  saveWinningNumbers(input) {
    this.#numbers.winning = input;
  }

  saveBonusNumbers(input) {
    this.#numbers.bonus = input;
  }

  getIssudNumbers() {
    return this.#numbers.issud;
  }


  calculateResult() {
    this.#matchUserLottoNumberWithWinningNumber()
    this.#calculator.calculateRateOfReturn(this.#amountPurchased);
  }

  #matchUserLottoNumberWithWinningNumber() {
    this.#numbers.issud.forEach((number) => {
      const result = this.#reduce(this.#splitWinningNumberWithComma(),number)
      this.#calculator.matchRanks(result, this.#numbers.bonus, number)
    });
  }

  #splitWinningNumberWithComma() {
    return this.#numbers.winning.split(',')
  }

  #reduce(value, number) {
    return value.reduce((acc,cur) => {
      if (number.includes(Number(cur))) acc += 1;
        return acc;
    },0)
  }

  getResult() {
    return this.#calculator.getResult()
  }
}

module.exports = Lotto;
