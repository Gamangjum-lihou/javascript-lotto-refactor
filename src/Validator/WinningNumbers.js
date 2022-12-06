const ValidationError = require('../Error/ValidationError');

const ERROR_MESSAGE = {
  number: '문자는 입력하실 수 없습니다.',
  falsy: '올바른 값이 아닙니다.',
  divide: '1,000원 단위로 나누어 떨어지지 않습니다.',
  comma: '쉼표로 번호를 구분해야 합니다.',
  range: '숫자의 범위는 1~45사이 이어야 합니다.',
  duplication: '중복된 숫자가 존재합니다.',
};

const WinningNumbers = {
  checkInput(input) {
    const spliInput = this.splitUsingComma(input);
    this.checkDistinguishedByCommas(spliInput);
    this.checkNumber(spliInput);
    this.checkRange(spliInput);
    this.checkDuplication(spliInput);
  },

  splitUsingComma(input) {
    return input.split(',');
  },

  checkDistinguishedByCommas(spliInput) {
    if (spliInput.length !== 6) {
      throw new ValidationError(ERROR_MESSAGE.comma);
    }
  },

  checkNumber(spliInput) {
    spliInput.forEach((input) => {
      if (!Number(input)) {
        throw new ValidationError(ERROR_MESSAGE.number);
      }
    });
  },

  checkRange(spliInput) {
    spliInput.forEach((number) => {
      if (number > 45 || number < 1) {
        throw new ValidationError(ERROR_MESSAGE.range);
      }
    });
  },

  checkDuplication(splitInput) {
    const checkBox = new Set();
    splitInput.forEach((number) => {
      checkBox.add(number);
    });
    if (checkBox.size !== 6) {
      throw new ValidationError(ERROR_MESSAGE.duplication);
    }
  },
};

module.exports = WinningNumbers;
