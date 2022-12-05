const Money = require('./domain/Money');
const Lotto = require('./Lotto');
const { generate } = require('./RandomLottoGenerator');

class LottoService {
  #money;

  #lottos;

  getLottoCount(input) {
    this.#money = new Money(input);

    return this.#money.getLottoCount();
  }

  getLottos(count) {
    return Array.from(Array(count), () => new Lotto(generate()));
  }
}
module.exports = LottoService;
