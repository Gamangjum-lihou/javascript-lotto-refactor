const {
  checkCorrectNumber,
  checkCorrectUnit,
  checkCorrectMainNumbersize,
  checkCorrectMainNumber,
  checkCorrectMainNumberRange,
  checkCorrectBonusNumberRange,
} = require('../src/Util/Validation');

describe('Validation Test', () => {
  test.each(['a', '10a', '오류지롱ㅋ'])('구매금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect((input) => {
      checkCorrectNumber(Number(input));
    }).toThrow();
  });

  test.each(['1010', '10111', '9887741'])('구매금액이 1000원 단위가 아니라면 예외가 발생한다.', () => {
    expect((input) => {
      checkCorrectUnit(Number(input));
    }).toThrow();
  });

  test.each(['1.2.3.4.5.6', '1/2/3/4/5/6', '1,2,3,4,5,6,7', '1,2,3,4,5'])(
    '당첨 번호가 6가 아니거나 구분자가 , 가 아니면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkCorrectMainNumbersize(input.split(',').map(Number));
      }).toThrow();
    },
  );

  test.each(['a,b,c,d,e,f', '10a,2,3,4,5,6', 'ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ'])(
    '당첨 번호가 숫자가 아니라면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkCorrectMainNumber(input.split(',').map(Number));
      }).toThrow();
    },
  );

  test.each(['1,2,3,4,5,100', '9999,9998,9997,9996,9995,9994', '-1,0,1,2,3,4'])(
    '당첨 번호가 1 ~ 45의 숫자가 아니라면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkCorrectMainNumberRange(input.split(',').map(Number));
      }).toThrow();
    },
  );

  test('보너스 번호가 1 ~ 45의 숫자가 아니라면 예외가 발생한다.', () => {
    const testInput = 0;
    expect(() => checkCorrectBonusNumberRange(testInput)).toThrow();
  });
});
