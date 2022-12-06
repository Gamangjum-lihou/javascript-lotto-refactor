const { RANK, MESSAGE } = require('../utils/constants');

const rankView = {
  getView(rank) {
    let message = '';

    for (let i = 5; i >= 1; i--) {
      message += RANK[i.toString()](rank.has(i) ? rank.get(i) : 0);
    }

    return MESSAGE.start_statics + message;
  },
};

module.exports = rankView;
