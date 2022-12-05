const InputView = require('./view/InputView');

class App {
  play() {
    const view = new InputView();
    view.inputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
