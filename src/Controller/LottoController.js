const Lotto = require('../Lotto');
const Player = require('../Player');
const { readLottoPrice, readWinLottoMainNumber, readWinLottoBonusNumber } = require('../View/InputView');
const { printCreatedLottoNumber, printResult, printMargin } = require('../View/OutputView');

class LottoController {
  #Lotto;

  #Player;

  constructor() {
    this.#Player = new Player();
  }

  getLottoPrice = () => {
    readLottoPrice(this.sendLottoPrice);
  };

  sendLottoPrice = (price) => {
    this.#Player.storeMoney(price);
    this.printPlayerLottery();
  };

  printPlayerLottery = () => {
    const playerLottery = this.#Player.getPlayerLottery();
    printCreatedLottoNumber(playerLottery);
    this.getLottoMainNumber();
  };

  getLottoMainNumber = () => {
    readWinLottoMainNumber(this.getLottoBonusNumber);
  };

  getLottoBonusNumber = (mainNumber) => {
    readWinLottoBonusNumber(mainNumber, this.sendWinLottery);
  };

  sendWinLottery = (mainNumber, bonusNumber) => {
    this.#Lotto = new Lotto(mainNumber, bonusNumber);
  };

  compareNumber = () => {
    const playerLottery = this.#Player.getPlayerLottery();
    const winList = this.#Lotto.compare(playerLottery);
    this.printWinList(winList);
  };

  printWinList = (winList) => {
    printResult(winList);
  };
}

module.exports = LottoController;
