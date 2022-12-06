const { Random } = require('@woowacourse/mission-utils');
const { REWARD } = require('../constants/system');

const createRandomLotto = (count) => Array.from({ length: count }, () => Random.pickUniqueNumbersInRange(1, 45, 6).sort((prev, curr) => prev - curr));

const getReward = (points) => points.reduce((acc, point, index) => (acc += REWARD[index] * point), 0);

const getRate = (point, account) => {
  const reward = getReward(point);
  return Math.round(((reward / account) * 100) * 10) / 10;
};

module.exports = {
  createRandomLotto,
  getReward,
  getRate,
};
