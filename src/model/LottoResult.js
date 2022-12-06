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
    const sortedRate = this.#rate.splice(5, 0, this.#rate[7]).slice(3, 7);
    const total = sortedRate.reduce((acc, count) => money.forEach((unit) => acc + count * unit), 0);
    return total / lottoCount;
  }

  getRate() {
    return this.#rate.splice(5, 0, this.#rate[7]).slice(3, 7);
  }
}

module.exports = LottoResult;
