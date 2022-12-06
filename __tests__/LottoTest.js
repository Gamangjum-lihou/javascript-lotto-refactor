const { MissionUtils } = require('@woowacourse/mission-utils');
const Lotto = require('../src/model/Lotto');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const runException = (inputs) => {
  const logSpy = getLogSpy();
  new Lotto(inputs);

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      runException(['1,2,3,4,5,6,7']);
    });
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1,2,3,4,5,5');
      runException();
    });
  });

  test('로또 번호에 1~45범위가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1,2,3,4,5,55');
      runException();
    });
  });

  test('로또 번호를 가지고 오는 getNumbers 매서드가 정상적으로 동작한다.', () => {
    // 준비(arrange)
    const lotto = new Lotto('1,2,3,4,5,6');

    // 실행(act)
    const result = lotto.getNumbers();

    // 검증(assert)
    expect(result).toEqual(['1', '2', '3', '4', '5', '6']);
  });
});
