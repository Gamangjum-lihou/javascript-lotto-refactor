const PurchaseAmount = require('./PurchaseAmount');

const Validator = {
  checkPurcahseAmount(input) {
    PurchaseAmount.checkInput(input);
  },
};

module.exports = Validator;
