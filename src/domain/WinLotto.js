const { PRIZE } = require('../utils/constants');

class WinLotto {
  #win;

  #bonus;

  constructor(win, bonus) {
    this.#win = win;
    this.#bonus = bonus;
  }

  getRank(lottos) {
    const ranks = lottos.map((lotto) => this.#getRankFromWinAndBounus(lotto));
    return this.#getRankMap(ranks);
  }

  #getRankFromWinAndBounus(lotto) {
    const duplicate = lotto.getDuplicate(this.#win);
    const hasBonus = lotto.hasNumber(this.#bonus);

    if (duplicate === 5) {
      return hasBonus ? 2 : 3;
    }

    return this.#getRankFromDuplicate(duplicate);
  }

  #getRankMap(ranks) {
    const rankMap = new Map();

    ranks.forEach((rank) => {
      rankMap.set(rank, rankMap.has(rank) ? rankMap.get(rank) + 1 : 1);
    });

    return rankMap;
  }

  #getRankFromDuplicate(duplicate) {
    if (duplicate === 6) return 1;

    if (duplicate === 5) return 3;

    if (duplicate === 4) return 4;

    if (duplicate === 3) return 5;
  }

  getPrize(lottos) {
    const ranks = this.getRank(lottos);
    let prize = 0;

    ranks.forEach((rank) => {
      prize += PRIZE[rank.toString()];
    });

    return prize;
  }
}

module.exports = WinLotto;
