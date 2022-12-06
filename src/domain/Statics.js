const { PRIZE } = require('../utils/constants');

const RANKING = Object.freeze({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  none: -1,
});

class Statics {
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

    if (duplicate === RANKING.fifth) {
      return hasBonus ? RANKING.second : RANKING.third;
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
    if (duplicate === 6) return RANKING.first;

    if (duplicate === 4) return RANKING.fourth;

    if (duplicate === 3) return RANKING.fifth;

    return RANKING.none;
  }

  getPrize(lottos) {
    const ranks = this.getRank(lottos);
    let prize = 0;

    ranks.forEach((_, rank) => {
      if (rank !== RANKING.none) prize += PRIZE[rank.toString()];
    });

    return prize;
  }
}

module.exports = Statics;
