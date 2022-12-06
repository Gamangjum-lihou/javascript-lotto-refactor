const { MESSAGE } = require('../utils/constants');

const lottoView = {
  countResult(count) {
    return MESSAGE.buy(count);
  },

  lottoResult(lottos) {
    return lottos.map((lotto) => `[${lotto.getLotto().join(', ')}]`).join('\n');
  },
};

module.exports = lottoView;
