const { generateLottery } = require('./Util/LotteryGenerator');
const { UNIT } = require('./Constants');

class Player {
  #money;

  #numbers;

  constructor(money) {
    this.#money = money;
  }

  createLottery(length) {
    this.#numbers = generateLottery(length);
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
