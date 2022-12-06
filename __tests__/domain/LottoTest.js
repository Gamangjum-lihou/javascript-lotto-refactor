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

  test('두 로또의 중복된 숫자의 개수를 반환한다.', () => {
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto1.getDuplicate(lotto2)).toEqual(6);
  });

  test('로또에 특정 번호의 유무를 리턴한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.hasNumber(1)).toBeTruthy();
    expect(lotto.hasNumber(8)).toBeFalsy();
  });
});
