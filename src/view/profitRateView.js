const { MESSAGE } = require('../utils/constants');

const STATICS = Object.freeze({
  percent: 100,
  unit_regex: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
  point: 1,
});

const profitRateView = {
  getView(profitRate) {
    const { percent, unit_regex, point } = STATICS;

    const rate = (profitRate / percent).toFixed(point).replace(unit_regex, ',');

    return MESSAGE.profit_rate(rate);
  },
};

module.exports = profitRateView;
