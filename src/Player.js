const { generateLottery } = require('./Util/LotteryGenerator');
const { UNIT } = require('./Constants');

class Player {
  #money;

  #numbers;

  constructor(money) {
    this.#money = money;
    this.#numbers = this.createLottery(money / UNIT);
  }

  createLottery(length) {
    return generateLottery(length);
  }

  getPlayerLottery() {
    return this.#numbers;
  }

  getPlayerMoney() {
    return this.#money;
  }

  getPlayerLotteryAmount() {
    return this.#money / UNIT;
  }
}

module.exports = Player;
