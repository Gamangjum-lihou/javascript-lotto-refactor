const PurchaseAmount = require('./PurchaseAmount');
const WinningNumbers = require('./WinningNumbers');

const Validator = {
  checkPurcahseAmount(input) {
    PurchaseAmount.checkInput(input);
  },

  checkWinningNumbers(input) {
    WinningNumbers.checkInput(input);
  },
};

module.exports = Validator;
