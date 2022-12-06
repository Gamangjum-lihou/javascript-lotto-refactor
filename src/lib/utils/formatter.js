const { RESET_ADD_BLANK } = require('../constants/message');
const { REWARD } = require('../constants/system');

const lottoListFormatter = (myArray = []) => {
  const message = JSON.stringify(myArray);
  return message.replace(/,/gi, RESET_ADD_BLANK);
};

const roundOneDecimal = (number) => Math.round(number * 10) / 10;

const resultMessageFormmatter = ([three, four, five, fiveBonus, six], rate) => {
  const [rewardThree, rewardFour, rewardFive, rewardFiveBonus, rewardSix] = REWARD;
  let message = '당첨 통계\n';
  message += '---\n';
  message += `3개 일치 (${rewardThree.toLocaleString()}원) - ${three}개\n`;
  message += `4개 일치 (${rewardFour.toLocaleString()}원) - ${four}개\n`;
  message += `5개 일치 (${rewardFive.toLocaleString()}원) - ${five}개\n`;
  message += `5개 일치, 보너스 볼 일치 (${rewardFiveBonus.toLocaleString()}원) - ${fiveBonus}개\n`;
  message += `6개 일치 (${rewardSix.toLocaleString()}원) - ${six}개\n`;
  message += `총 수익률은 ${rate}%입니다.`;

  return message;
};

module.exports = {
  lottoListFormatter,
  roundOneDecimal,
  resultMessageFormmatter,
};
