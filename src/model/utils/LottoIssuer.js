const { Random } = require('@woowacourse/mission-utils');

class LottoIssuer {
  #Lottos = [];

  constructor(money) {
    LottoIssuer.#validate(money);
    this.#issue(money / 1000);
  }

  static #validate(money) {
    LottoIssuer.#checkNumber(money);
    LottoIssuer.#checkDivision(money, 1000);
  }

  static #checkNumber(input) {
    const RegExp = /^[0-9]+$/g;
    if (!RegExp.test(input)) {
      throw new Error('입력값이 숫자가 아닙니다.');
    }
  }

  static #checkDivision(input, divisionValue) {
    if (input % divisionValue !== 0) {
      throw new Error('입력값은 1000으로 나누어 떨어져야 합니다.');
    }
  }

  #issue(number) {
    while (this.#Lottos.length < number) {
      this.#Lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }

  getLottos() {
    return this.#Lottos;
  }
}

module.exports = LottoIssuer;
