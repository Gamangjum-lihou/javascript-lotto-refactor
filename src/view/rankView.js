const { MESSAGE } = require('../utils/constants');

const rankView = {
  getView(rank) {
    let message = '';

    for (let i = 0; i < 6; i++) {
      message += MESSAGE.rank[String(i)](rank.has(i) ? rank.get(i) : 0);
    }

    return MESSAGE.startStatics + message;
  },
};

module.exports = rankView;
