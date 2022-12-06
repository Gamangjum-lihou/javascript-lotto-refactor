const { MissionUtils } = require('@woowacourse/mission-utils');
const LottoBonus = require('../src/model/LottoBonus');

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
  new LottoBonus(inputs[0], inputs[1]);

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

describe('로또 클래스 테스트', () => {
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      runException(['4', '4']);
    });
  });

  test('로또 번호에 1~45범위가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['46', '1']);
      runException();
    });
  });

  test('보너스 번호를 가지고 오는 getNumber 매서드가 정상적으로 동작한다.', () => {
    // 준비(arrange)
    const lottoBonus = new LottoBonus('4', '12');

    // 실행(act)
    const result = lottoBonus.getNumber();

    // 검증(assert)
    expect(result).toEqual('4');
  });
});
