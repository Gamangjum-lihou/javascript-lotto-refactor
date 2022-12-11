const PurchaseAmount = require('./PurchaseAmount');
const Winning = require('./Winning');
const Bonus = require('./Bonus');

const Validator = {
  checkPurcahseAmount(input) {
    PurchaseAmount.checkInput(input);
  },

  checkWinningNumbers(input) {
    Winning.checkInput(input);
  },

  checkBonusNumber(input, bonus) {
    Bonus.checkInput(input, bonus);
  },
};

module.exports = Validator;
