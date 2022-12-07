/* eslint-disable max-lines-per-function */
const Money = require('../../src/domain/Money');

describe('Money 클래스 검사', () => {
  test('로또 구입 금액을 입력했을 때 알맞은 로또 갯수를 반환하는 지 확인한다.', () => {
    const money = new Money(3000);
    expect(money.getLottoCount()).toBe(3);
  });

  test('로또 구입 금액을 입력했을 때 알맞은 로또 갯수를 반환하는 지 확인한다.', () => {
    const money = new Money(6000);
    expect(money.getLottoCount()).toBe(6);
  });

  test.each([['123'], ['2qs'], ['!!!'], ['1 2 3 '], ['99990999999']])(
    '로또 구입 금액이 올바른 형식이 아니면 에러를 발생한다.',
    (test) => {
      expect(() => new Money(test)).toThrow();
    },
  );
});
