const { Random } = require('@woowacourse/mission-utils');
const compareNumber = require('../src/Util/compareNumber');
const { generateTotal } = require('../src/Util/TotalGenerator');
const { generateLottery } = require('../src/Util/LotteryGenerator');
const { PRIZE } = require('../src/Constants');

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('Util 함수 테스트', () => {
  test('compareNumber 테스트', () => {
    // 조건
    const testWinLottery = { main: new Set([1, 2, 3, 4, 5, 6]), bonus: 7 };
    const testPlayer = [1, 2, 3, 4, 5, 6];
    const correctWinList = [{ mainCount: 6, bonusCount: 0 }];

    // 실행
    const expectWinList = [compareNumber(testWinLottery, testPlayer)];

    // 평가
    expect(expectWinList).toEqual(correctWinList);
  });

  test('TotalGenerator generateTotal 테스트', () => {
    // 조건
    const testWinList = [
      { mainCount: 6, bonusCount: 0 },
      { mainCount: 5, bonusCount: 1 },
    ];
    const correctRank = [1, 1, 0, 0, 0, 0];
    const correctTotal = PRIZE.first + PRIZE.second;

    // 실행
    const { rank, total } = generateTotal(testWinList);

    // 평가
    expect(rank).toEqual(correctRank);
    expect(total).toEqual(correctTotal);
  });

  test('LotteryGenerator genarateLottery 테스트', () => {
    // 조건
    const correctRandomNumber = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ]);

    // 실행
    const expectGeneratedNumber = generateLottery(correctRandomNumber.length);

    // 평가
    expect(expectGeneratedNumber).toEqual(correctRandomNumber);
  });
});
