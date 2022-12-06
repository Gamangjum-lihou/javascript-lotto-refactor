class LottoBonus {
  #number = null;

  constructor(number) {
    this.#number = number;
    this.#validate();
  }

  #validate() {
    this.#checkNumber();
    this.#checkRange();
    this.#checkDuplicate();
  }

  #checkNumber() {
    const RegExp = /^[0-9]+$/g;
    if (!RegExp.test(this.#number)) {
      throw new Error('입력값이 숫자가 아닙니다.');
    }
  }

  #checkRange() {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!regExp.test(this.#number)) {
      throw new Error('입력한 숫자가 로또 숫자 범위인 1~45를 넘어갔습니다.');
    }
  }

  #checkDuplicate(numbers) {
    if (numbers.includes(this.#number)) {
      throw new Error('당첨 번호에 중복된 숫자입니다.');
    }
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = LottoBonus;
