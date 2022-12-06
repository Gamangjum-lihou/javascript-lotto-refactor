class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#numbers = numbers.split(',');
    this.#validate();
  }

  #validate() {
    this.#checkLength();
    this.#checkNumber();
    this.#checkRange();
    this.#checkDuplicate();
  }

  #checkLength() {
    if (this.#numbers.length !== 6) {
      throw new Error('로또 번호는 6개여야 합니다.');
    }
  }

  #checkNumber() {
    this.#numbers.forEach((number) => {
      const RegExp = /^[0-9]+$/g;
      if (!RegExp.test(number)) {
        throw new Error('입력값이 숫자가 아닙니다.');
      }
    });
  }

  #checkRange() {
    this.#numbers.forEach((number) => {
      const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
      if (!regExp.test(number)) {
        throw new Error('입력한 숫자가 로또 숫자 범위인 1~45를 넘어갔습니다.');
      }
    });
  }

  #checkDuplicate() {
    const numberSet = new Set(this.#numbers);
    if (numberSet.size !== this.#numbers.length) {
      throw new Error('중복된 값이 있습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
