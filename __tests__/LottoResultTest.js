const LottoResult = require('../src/model/LottoResult');

describe('LottoResult 테스트', () => {
  test('발행한 각 로또의 매칭 카운트를 받아 카운트를 누적하는 calculateResult 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], 7, [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 44, 45],
      [1, 2, 3, 43, 44, 45],
      [1, 2, 42, 43, 44, 45],
    ]);

    // 검증(assert)
    expect(lottoResult.getResult()).toEqual([1, 1, 0, 1, 0]);
  });

  test('수익률을 계산하는 calculateRate 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], 1, [[1, 2, 3, 10, 11, 12]]);
    // 검증(assert)
    expect(lottoResult.calculateRate(1)).toEqual('500.0');
  });
});
