const ValidationError = require('../../error/ValidationError');
const { ERROR } = require('../../utils/constants');
const { isNumber } = require('./NumberValidator');

const WinNumberValidator = {
  validate(input) {
    input.split(',').forEach((num) => {
      if (!isNumber(num)) throw new ValidationError(ERROR.win_number);
    });
  },
};

module.exports = WinNumberValidator;
