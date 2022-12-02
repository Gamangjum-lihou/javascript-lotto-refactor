const Lotto = require('../Lotto');
const Player = require('../Player');
const { readLotteryPrice, readWinLotteryMainNumber, readWinLotteryBonusNumber } = require('../View/InputView');
const { printCreatedLotteryNumber, printResult, printMargin, exit } = require('../View/OutputView');

class LottoController {
  #Lotto;

  #Player;

  constructor() {
    this.#Player = new Player();
  }

  getLottoPrice = () => {
    readLotteryPrice(this.sendLotteryPrice);
  };

  sendLotteryPrice = (price) => {
    this.#Player.storeMoney(price);
    this.printPlayerLottery();
  };

  printPlayerLottery = () => {
    const playerLottery = this.#Player.getPlayerLottery();
    const playerLotteryAmount = this.#Player.getPlayerLotteryAmount();
    printCreatedLotteryNumber(playerLottery, playerLotteryAmount);
    this.getLotteryMainNumber();
  };

  getLotteryMainNumber = () => {
    readWinLotteryMainNumber(this.getLotteryBonusNumber);
  };

  getLotteryBonusNumber = (mainNumber) => {
    readWinLotteryBonusNumber(mainNumber, this.sendWinLottery);
  };

  sendWinLottery = (mainNumber, bonusNumber) => {
    this.#Lotto = new Lotto(mainNumber, bonusNumber);
    this.compareNumber();
  };

  compareNumber = () => {
    const playerLottery = this.#Player.getPlayerLottery();
    const winList = this.#Lotto.compare(playerLottery);
    this.printWinList(winList);
  };

  printWinList = (winList) => {
    printResult(winList);
    exit();
  };
}

module.exports = LottoController;
