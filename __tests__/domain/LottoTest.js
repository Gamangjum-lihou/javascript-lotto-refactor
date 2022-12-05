/* eslint-disable max-lines-per-function */
const Lotto = require('../../src/Lotto');

describe('Lotto 클래스 검사', () => {
  test('생성된 로또 번호가 6자리가 아니면 에러를 발생시킨다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow();
  });

  test('생성된 로또 번호가 중복되었으면 에러를 발생시킨다.', () => {
    expect(() => new Lotto([1, 1, 2, 3, 4, 5])).toThrow();
  });

  test('로또 번호를 반환한다', () => {
    const lotto = new Lotto([1, 5, 6, 7, 8, 9]);
    expect(lotto.getLotto()).toEqual([1, 5, 6, 7, 8, 9]);
  });
});
