const LOTTO = Object.freeze({
  price: 1000,
  start: 1,
  end: 45,
  count: 6,
  limit: 1000000000,
});

const MESSAGE = Object.freeze({
  start: '구입금액을 입력해 주세요.\n',
});

const ERROR = Object.freeze({
  not_number: '로또 구입 금액은 숫자입니다.',
});

module.exports = { LOTTO, MESSAGE, ERROR };
