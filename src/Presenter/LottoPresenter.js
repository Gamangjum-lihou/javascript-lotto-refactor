const Lotto = require('../model/Lotto');
const LottoBonus = require('../model/LottoBonus');
const LottoIssuer = require('../model/LottoIssuer');
const LottoResult = require('../model/LottoResult');
const {
  readPurChase,
  printPurChaseList,
  readWinngNumber,
  readBonusNumber,
  printWinningStatistics,
  printRate,
} = require('../view/IoView');

class LottoPresenter {
  #lottoIssuer;

  #lotto;

  #lottoBonus;

  #lottoResult;

  run() {
    readPurChase((input) => {
      this.#lottoIssuer = new LottoIssuer(input);
      this.#showPurChaseList();
    });
  }

  #showPurChaseList() {
    printPurChaseList(this.#lottoIssuer.getLottos());
    this.#setWinningNumber();
  }

  #setWinningNumber() {
    readWinngNumber((input) => {
      this.#lotto = new Lotto(input);
      this.#setBonusNumber();
    });
  }

  #setBonusNumber() {
    readBonusNumber((input) => {
      this.#lottoBonus = new LottoBonus(input, this.#lotto.getNumbers());
      this.#showResult();
    });
  }

  #showResult() {
    const winningNumber = this.#lotto.getNumbers().map(Number);
    const bonusNumber = this.#lottoBonus.getNumber();
    const lottos = this.#lottoIssuer.getLottos();
    this.#lottoResult = new LottoResult(winningNumber, bonusNumber, lottos);
    printWinningStatistics(this.#lottoResult.getResult());
    printRate(this.#lottoResult.calculateRate(lottos.length));
  }
}

module.exports = LottoPresenter;
