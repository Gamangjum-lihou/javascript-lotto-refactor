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
    this.#lottos = Array.from(Array(count), () => new Lotto(generate()));
    return this.#lottos;
  }

  inputWinNumbers(numbers) {
    const winNumbers = numbers.split(',');

    this.#win = new Lotto(winNumbers);
  }

  inputBonusNumber(number) {
    this.#bonus = new Bonus(number);
  }

  getStatics() {
    const rank = this.#getRank();
    this.#getProfitRate();
    return rank;
  }

  #getRank() {
    const rank = new Map();

    this.#lottos.map((lotto) => this.#getRankFromWinAndBounus(lotto));

    return rank;
  }

  #getRankFromWinAndBounus(lotto) {
    const duplicate = lotto.getDuplicate(this.#win);
    const hasBonus = lotto.hasNumber(this.#bonus);

    if (duplicate === 5) {
      return hasBonus ? 2 : 3;
    }

    return this.#getRankFromDuplicate(duplicate);
  }

  #getRankFromDuplicate(duplicate) {
    const rankPerDuplicate = {
      6: 1,
      5: 3,
      4: 4,
      3: 5,
    };

    return rankPerDuplicate[duplicate];
  }

  #getProfitRate() {}
}
module.exports = LottoService;
