class LottoResult {
  #rate = [0, 0, 0, 0, 0, 0, 0, 0];

  constructor(numbers, bonus, lottos) {
    this.#calculateResult(numbers, bonus, lottos);
  }

  #calculateResult(numbers, bonus, lottos) {
    lottos.forEach((lotto) => {
      const value = numbers.filter((number) => lotto.includes(number)).length;
      if (value === 5) {
        LottoResult.#checkBonus(lotto, bonus);
        return;
      }
      this.#rate[value] += 1;
    });
  }

  static #checkBonus(lotto, bonus) {
    if (lotto.includes(bonus)) {
      this.#rate[7] += 1;
      return;
    }
    this.#rate[5] += 1;
  }

  calculateRate(lottoCount) {
    const money = [5000, 50000, 1500000, 30000000, 2000000000];
    const sortedRate = this.getResult();
    const total = sortedRate.reduce((acc, count, index) => acc + count * money[index], 0);
    const rate = (total / lottoCount / 10).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return rate;
  }

  getResult() {
    const rate = this.#rate.slice(3, 8);
    [rate[3], rate[4]] = [rate[4], rate[3]];
    return rate;
  }
}

module.exports = LottoResult;
