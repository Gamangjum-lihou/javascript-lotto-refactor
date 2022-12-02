class Lotto {
  #numbers = {
    main: null,
    bonus: null,
  };

  constructor(mainNumber, bonusNumber) {
    this.#numbers.main = mainNumber;
    this.#numbers.bonus = bonusNumber;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
