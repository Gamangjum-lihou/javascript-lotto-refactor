const Lotto = require('../Lotto');
const Player = require('../Player');
const getTotal = require('../Util/getTotal');
const { readLotteryPrice, readMainNumber, readBonusNumber } = require('../View/InputView');
const { printCreatedLotteryNumber, printResult, printMargin, exit } = require('../View/OutputView');

class LottoController {
  #Lotto;

  #Player;

  getLottoPrice() {
    readLotteryPrice(this.getLottoPrice.bind(this), this.sendLotteryPrice.bind(this));
  }

  sendLotteryPrice(price) {
    this.#Player = new Player(price);
    this.printPlayerLottery();
  }

  printPlayerLottery() {
    const playerLottery = this.#Player.getPlayerLottery();
    const playerLotteryAmount = this.#Player.getPlayerLotteryAmount();
    printCreatedLotteryNumber(playerLottery, playerLotteryAmount);
    this.getLotteryMainNumber();
  }

  getLotteryMainNumber() {
    readMainNumber(this.getLotteryMainNumber.bind(this), this.getLotteryBonusNumber.bind(this));
  }

  getLotteryBonusNumber(mainNumber) {
    readBonusNumber(mainNumber, this.getLotteryBonusNumber.bind(this), this.sendWinLottery.bind(this));
  }

  sendWinLottery(mainNumber, bonusNumber) {
    this.#Lotto = new Lotto(mainNumber, bonusNumber);
    this.compareNumber();
  }

  compareNumber() {
    const playerLottery = this.#Player.getPlayerLottery();
    const winList = this.#Lotto.compare(playerLottery);
    const result = getTotal.calculate(winList);
    this.printResults(result);
  }

  printResults({ rank, total }) {
    const lottoPrice = this.#Player.getPlayerMoney();
    printResult(rank);
    printMargin(((total / lottoPrice) * 100).toFixed(1));
    exit();
  }
}

module.exports = LottoController;
