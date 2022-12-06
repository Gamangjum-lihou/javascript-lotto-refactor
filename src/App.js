const { INPUT_MESSAGE, LINE_BREAK } = require('./lib/constants/message');
const LottoStore = require('./Model/LottoStore');
const Lotto = require('./Model/Lotto');
const Bonus = require('./Model/Bonus');
const { MIN_MATCH_COUNT } = require('./lib/constants/system');
const { resultMessageFormmatter } = require('./lib/utils/formatter');
const View = require('./View');
const { getRate } = require('./lib/utils/gameSystem');

class App {
  lottoStore;

  lotto;

  bonus;

  constructor() {
    this.view = new View();
  }

  play() {
    this.inputPrice();
  }

  inputPrice() {
    const handler = (input) => {
      try {
        this.lottoStore = new LottoStore(input);
        this.printLottoCountAndList();
        this.inputLotto();
      } catch (err) {
        this.errorHandler(err, this.inputPrice.bind(this));
      }
    };
    this.view.input.readLine(INPUT_MESSAGE.price, handler);
  }

  printLottoCountAndList() {
    this.view.output.printLottoCount(this.lottoStore.getCount());
    this.view.output.printLottoList(this.lottoStore.getLottosMessage());
  }

  inputLotto() {
    const handler = (input) => {
      try {
        this.lotto = new Lotto(input);
        this.inputBonus();
      } catch (err) {
        this.errorHandler(err, this.inputLotto.bind(this));
      }
    };
    this.view.input.readLine(LINE_BREAK + INPUT_MESSAGE.lotto, handler);
  }

  inputBonus() {
    const handler = (input) => {
      try {
        this.bonus = new Bonus(input);
        this.printResult();
      } catch (err) {
        this.errorHandler(err, this.inputBonus.bind(this));
      }
    };
    this.view.input.readLine(LINE_BREAK + INPUT_MESSAGE.bonus, handler);
  }

  errorHandler(error, callback) {
    this.view.output.print(error.message + LINE_BREAK);
    callback();
  }

  printResult() {
    const point = this.getPoint();
    const rate = getRate(point, this.lottoStore.getAccount());
    this.view.output.print(resultMessageFormmatter(point, rate));
  }

  getPoint() {
    const lottoList = this.lottoStore.getLottos();
    const winNumber = this.lotto.getLotto();
    const bonus = this.bonus.getBonus();

    return lottoList.reduce(
      (acc, lotto) => {
        let matchCount = lotto.filter((num) => winNumber.includes(String(num))).length;
        if (matchCount === 5 && lotto.includes(bonus)) {
          matchCount += 1;
        }
        if (matchCount === 6) {
          matchCount += 1;
        }
        if (matchCount >= MIN_MATCH_COUNT) {
          acc[matchCount - MIN_MATCH_COUNT] += 1;
        }
        return acc;
      },
      [0, 0, 0, 0, 0],
    );
  }
}

module.exports = App;
