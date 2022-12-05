const Money = require('./domain/Money');
const Lotto = require('./Lotto');
const Bonus = require('./domain/Bonus');
const { generate } = require('./RandomLottoGenerator');

class LottoService {
  #money;

  #lottos;

  #win;

  #bonus;

  getLottoCount(input) {
    this.#money = new Money(input);

    return this.#money.getLottoCount();
  }

  getLottos(count) {
    return Array.from(Array(count), () => new Lotto(generate()));
  }

  inputWinNumbers(numbers) {
    const winNumbers = numbers.split(',');

    this.#win = new Lotto(winNumbers);
  }

  inputBonusNumber(number) {
    this.#bonus = new Bonus(number);
  }
}
module.exports = LottoService;
