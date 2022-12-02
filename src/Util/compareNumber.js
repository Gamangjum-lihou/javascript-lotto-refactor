const compareNumber = ({ main, bonus }, player) => {
  let mainCount = 0;
  let bonusCount = 0;
  player.forEach((number) => {
    if (main.has(number)) mainCount += 1;
    if (number === bonus) bonusCount += 1;
  });

  return { mainCount, bonusCount };
};

module.exports = compareNumber;
