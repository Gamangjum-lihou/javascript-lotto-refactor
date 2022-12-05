const LOTTO = Object.freeze({
  price: 1000,
  start: 1,
  end: 45,
  count: 6,
  limit: 1000000000,
});

const MESSAGE = Object.freeze({
  start: '구입금액을 입력해 주세요.\n',
  buy: (num) => `\n${num}개를 구입했습니다.\n`,
  win: '\n당첨 번호를 입력해주세요.\n',
});

const ERROR = Object.freeze({
  not_number: '숫자로 입력해주세요.',
  money_unit: '로또 구입 금액은 1000원 단위입니다.',
  money_limit: '로또 구입 금액은 최대 1,000,000,000원 까지입니다.',
  lotto_length: '로또 길이가 6개가 아닙니다.',
  lotto_duplicate: '로또가 중복되었습니다.',
});

module.exports = { LOTTO, MESSAGE, ERROR };
