const InputView = require('./InputView');

class View {
  #inputView = new InputView();

  inputMoney() {
    this.#inputView.inputMoney();
  }
}

module.exports = View;
