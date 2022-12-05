const ValidationError = require('../../error/ValidationError');
const { ERROR } = require('../../utils/constants');

const WinNumberValidator = {
  isNumber(input) {
    const inputNumber = Math.floor(Number(input));

    return String(inputNumber) === input && inputNumber >= 0;
  },

  validate(input) {
    input.split(',').forEach((num) => {
      if (!WinNumberValidator.isNumber(num)) {
        throw new ValidationError(ERROR.win_number);
      }
    });
  },
};

module.exports = WinNumberValidator;
