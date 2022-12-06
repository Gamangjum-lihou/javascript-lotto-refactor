const Player = require('../src/Player');
const Lotto = require('../src/Lotto');
const { UNIT } = require('../src/Constants');

describe('Model 클래스 테스트', () => {
  test('Player createLottery 기능 테스트', () => {
    // 조건
    const correctAmount = 2;

    // 실행
    const player = new Player(correctAmount * UNIT);
    const expectAmount = player.getPlayerLotteryAmount();

    // 평가
    expect(expectAmount).toEqual(correctAmount);
  });

  test('Lotto compare 기능 테스트', () => {
    // 조건
    const testPlayer = [
      [1, 2, 3, 4, 5, 6],
      [10, 11, 12, 13, 14, 15],
    ];
    const correctWinList = [
      { mainCount: 6, bonusCount: 0 },
      { mainCount: 0, bonusCount: 0 },
    ];
    const lottery = new Lotto('1,2,3,4,5,6', '7');

    // 실행
    const expectWinList = lottery.compare(testPlayer);

    // 평가
    expect(expectWinList).toEqual(correctWinList);
  });
});
