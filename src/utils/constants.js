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
  bonus: '\n보너스 번호를 입력해주세요.\n',
  start_statics: `당첨 통계\n ---\n`,
  rank: {
    5: (num) => `3개 일치 (5,000원) - ${num}개\n`,
    4: (num) => `4개 일치 (50,000원) - ${num}개\n`,
    3: (num) => `5개 일치 (1,500,000원) - ${num}개\n`,
    2: (num) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개\n`,
    1: (num) => `6개 일치 (2,000,000,000원) - ${num}개\n`,
  },
  profit_rate: (percent) => `총 수익률은 ${percent}%입니다.`,
});

const ERROR = Object.freeze({
  not_number: '숫자로 입력해주세요.',
  win_number: '쉼표로 구분된 숫자로 입력해주세요.',
  money_unit: '로또 구입 금액은 1000원 단위입니다.',
  money_limit: '로또 구입 금액은 최대 1,000,000,000원 까지입니다.',
  lotto_length: '로또 번호 길이가 6개가 아닙니다.',
  lotto_duplicate: '로또가 중복되었습니다.',
  not_range: '번호는 1 ~ 45 사이이어야 합니다.',
});

const PRIZE = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

module.exports = { LOTTO, MESSAGE, ERROR, PRIZE };
