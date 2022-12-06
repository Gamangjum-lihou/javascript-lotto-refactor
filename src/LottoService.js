const Money = require('./domain/Money');
const Lotto = require('./Lotto');
const Bonus = require('./domain/Bonus');
const Statics = require('./domain/Statics');
const { generate } = require('./RandomLottoGenerator');

class LottoService {
  #money;

  #lottos;

  #win;

  #bonus;

  #statics;

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
    this.#bonus = new Bonus(number, this.#win);
  }

  getRank() {
    this.#statics = new Statics(this.#win, this.#bonus.getBonus());

    return this.#statics.getRank(this.#lottos);
  }

  getProfitRate() {
    const profit = this.#statics.getPrize(this.#lottos);

    return this.#money.getProfitRate(profit);
  }
}
module.exports = LottoService;
