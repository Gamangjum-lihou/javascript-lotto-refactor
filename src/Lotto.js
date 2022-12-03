const compareNumber = require('./Util/compareNumber');

class Lotto {
  #numbers = {
    main: null,
    bonus: null,
  };

  constructor(mainNumber, bonusNumber) {
    this.#numbers.main = new Set(mainNumber.toString().split(',').map(Number));
    this.#numbers.bonus = Number(bonusNumber);
  }

  compare = (playerLottery) => {
    const winList = [];
    playerLottery.forEach((player) => {
      winList.push(compareNumber(this.#numbers, player));
    });

    return winList;
  };
}

module.exports = Lotto;
