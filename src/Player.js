const { Random } = require('@woowacourse/mission-utils');

class Player {
  #money;

  #numbers;

  storeMoney = (money) => {
    this.#money = money;
    this.#numbers = this.generateLottery();
  };

  generateLottery = () =>
    Array.from({ length: this.#money / 1000 }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return numbers.sort((prev, cur) => prev - cur);
    });

  getPlayerLottery = () => this.#numbers;

  getPlayerLotteryAmount = () => this.#money / 1000;
}

module.exports = Player;
