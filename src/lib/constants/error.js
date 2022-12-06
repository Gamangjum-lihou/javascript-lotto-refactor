const { RANGE, PRICE_UNIT } = require('./system');

const ERROR_CODE = '[ERROR]';

const MESSAGE = Object.freeze({
  number: '숫자를 입력해주세요.',
  unit: `${PRICE_UNIT}단위로 입력해주세요.`,
  count: '로또 번호는 6개여야 합니다.',
  range: `${RANGE.min}부터 ${RANGE.max}까지의 숫자를 입력해주세요.`,
  overlap: '중복되지 않는 숫자를 입력해주세요.',
});

module.exports = {
  ERROR_CODE,
  MESSAGE,
};
