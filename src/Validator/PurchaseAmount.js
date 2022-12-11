const ValidationError = require('../Error/ValidationError');

const ERROR_MESSAGE = {
  number: '문자는 입력하실 수 없습니다.',
  falsy: '올바른 값이 아닙니다.',
  divide: '1,000원 단위로 나누어 떨어지지 않습니다.',
};

const PurchaseAmount = {
  checkInput(input) {
    this.checkNumber(input);
    this.checkStartZero(input);
    this.checkFalsy(input);
    this.checkDivide(input);
  },

  checkNumber(input) {
    if (/\D/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.number);
    }
  },

  checkStartZero(input) {
    if (/^0/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.falsy);
    }
  },

  checkFalsy(input) {
    if (!input) {
      throw new ValidationError(ERROR_MESSAGE.falsy);
    }
  },

  checkDivide(input) {
    if (input % 1000) {
      throw new ValidationError(ERROR_MESSAGE.divide);
    }
  },
};

module.exports = PurchaseAmount;
