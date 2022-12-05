const ValidationError = require('../../error/ValidationError');
const { ERROR } = require('../../utils/constants');

const NumberValidator = {
  isNumber(input) {
    const inputNumber = Math.floor(Number(input));

    return String(inputNumber) === input && inputNumber >= 0;
  },
  validate(input) {
    if (!NumberValidator.isNumber(input)) {
      throw new ValidationError(ERROR.not_number);
    }
  },
};

module.exports = NumberValidator;
