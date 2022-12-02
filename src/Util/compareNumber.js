const compareNumber = ({ main, bonus }, player) => {
  // 메인 넘버 당첨 개수, 보너스 넘버 당첨 개수 리턴
  let mainCount = 0;
  let bonusCount = 0;
  player.forEach((number) => {
    if (main.has(number)) mainCount += 1;
    if (number === bonus) bonusCount += 1;
  });

  return { mainCount, bonusCount };
};

module.exports = compareNumber;
