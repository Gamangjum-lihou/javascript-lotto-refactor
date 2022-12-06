const Money = require('./domain/Money');
const Lotto = require('./Lotto');
const Bonus = require('./domain/Bonus');
const WinLotto = require('./domain/WinLotto');
const { generate } = require('./RandomLottoGenerator');

class LottoService {
  #money;

  #lottos;

  #win;

  #bonus;

  #winLotto;

  getLottoCount(input) {
    this.#money = new Money(input);

    return this.#money.getLottoCount();
  }

  getLottos(count) {
    this.#lottos = Array.from(Array(count), () => new Lotto(generate()));

    return this.#lottos;
  }

  inputWinNumbers(numbers) {
    const winNumbers = numbers.split(',').map(Number);
    this.#win = new Lotto(winNumbers);
  }

  inputBonusNumber(number) {
    this.#bonus = new Bonus(number);
    this.#winLotto = new WinLotto(this.#win, this.#bonus.getBonus());
  }

  getRank() {
    return this.#winLotto.getRank(this.#lottos);
  }

  getProfitRate() {
    const profit = this.#winLotto.getPrize(this.#lottos);

    return this.#money.getProfitRate(profit);
  }
}
module.exports = LottoService;
