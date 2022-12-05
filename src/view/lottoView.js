const { MESSAGE } = require('../utils/constants');

const lottoView = {
  countResult(count) {
    return MESSAGE.buy(count);
  },

  lottoResult(lottos) {
    return lottos.map((lotto) => JSON.stringify(lotto.getLotto())).join('\n');
  },
};

module.exports = lottoView;
