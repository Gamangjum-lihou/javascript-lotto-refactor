const Money = require('./domain/Money');
// const Lotto = require('./Lotto');

class LottoService {
  #money;

  #lottos;

  getLottos(input) {
    this.#money = new Money(input);

    return this.#money.getLottoCount();
  }
}
module.exports = LottoService;
