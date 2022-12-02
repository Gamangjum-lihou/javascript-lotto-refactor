const MESSAGE = {
  invalid_type: '[ERROR] 숫자만 입력하실 수 있습니다.',
  invalid_price_unit: '[ERROR] 구매 금액은 천원단위만 입력 가능합니다.',
  invalid_main_size: '[ERROR] 로또 번호가 6자리가 아니거나 구분자를 잘못 입력하셨습니다.',
  invalid_range: '[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.',
};

const checkCorrectNumber = (input) => {
  if (Number.isNaN(input)) throw new Error(MESSAGE.invalid_type);
};

const checkCorrectUnit = (input) => {
  if (input % 1000 !== 0) throw new Error(MESSAGE.invalid_price_unit);
};

const checkCorrectMainNumbersize = (input) => {
  if (input.length !== 6) throw new Error(MESSAGE.invalid_main_size);
};

const checkCorrectMainNumber = (input) => {
  const RegExp = /^[0-9]$/;
  input.forEach((number) => {
    if (!RegExp.test(number)) throw new Error(MESSAGE.invalid_type);
  });
};

const checkCorrectMainNumberRange = (input) => {
  input.forEach((number) => {
    if (number < 1 || number > 45) throw new Error(MESSAGE.invalid_range);
  });
};

const checkCorrectBonusNumberRange = (input) => {
  if (input < 1 || input > 45) throw new Error(MESSAGE.invalid_range);
};

module.exports = {
  checkCorrectNumber,
  checkCorrectUnit,
  checkCorrectMainNumbersize,
  checkCorrectMainNumber,
  checkCorrectMainNumberRange,
  checkCorrectBonusNumberRange,
};
