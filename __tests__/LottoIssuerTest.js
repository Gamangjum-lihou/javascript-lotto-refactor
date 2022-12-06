const MissionUtils = require('@woowacourse/mission-utils');
const LottoIssuer = require('../src/model/LottoIssuer');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const mockLotto = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];

describe('LottoIssuer 테스트', () => {
  test('발행한 로또 번호를 가져오는 getLottos 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    mockRandoms(mockLotto);

    // 실행(act)
    const lottoIssuer = new LottoIssuer(8000);
    const result = lottoIssuer.getLottos();

    // 검증(assert)
    expect(result).toEqual(mockLotto);
  });
});
