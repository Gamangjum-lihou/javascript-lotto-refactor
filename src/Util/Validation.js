const { UNIT, INFO } = require('../Constants');

const MESSAGE = Object.freeze({
  invalid_type: '[ERROR] 숫자만 입력하실 수 있습니다.',
  invalid_price_unit: '[ERROR] 구매 금액은 천원단위만 입력 가능합니다.',
  invalid_main_size: '[ERROR] 로또 번호가 6자리가 아니거나 구분자를 잘못 입력하셨습니다.',
  invalid_range: '[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.',
});

function checkCorrectNumber(input) {
  if (Number.isNaN(input)) throw new Error(MESSAGE.invalid_type);
}

function checkCorrectUnit(input) {
  if (input % UNIT !== 0) throw new Error(MESSAGE.invalid_price_unit);
}

function checkCorrectMainNumbersize(input) {
  if (input.length !== INFO.lotto_size) throw new Error(MESSAGE.invalid_main_size);
}

function checkCorrectMainNumber(input) {
  input.forEach((number) => {
    if (Number.isNaN(number)) throw new Error(MESSAGE.invalid_type);
  });
}

function checkCorrectMainNumberRange(input) {
  input.forEach((number) => {
    if (number < INFO.lotto_start || number > INFO.lotto_end) throw new Error(MESSAGE.invalid_range);
  });
}

function checkCorrectBonusNumberRange(input) {
  if (input < INFO.lotto_start || input > INFO.lotto_end) throw new Error(MESSAGE.invalid_range);
}

module.exports = {
  checkCorrectNumber,
  checkCorrectUnit,
  checkCorrectMainNumbersize,
  checkCorrectMainNumber,
  checkCorrectMainNumberRange,
  checkCorrectBonusNumberRange,
};
