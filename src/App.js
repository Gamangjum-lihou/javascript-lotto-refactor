const LottoController = require('./Controller/LottoController');

class App {
  play() {
    const controller = new LottoController();
    controller.getLottoPrice();
  }
}

const app = new App();
app.play();
module.exports = App;
